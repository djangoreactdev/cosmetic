def buildJar() {
    echo "building the application..."
    sh 'pwd'
} 

def buildImage() {
    echo "building the docker image..."
    // sh 'docker build -t djangoreactdev/cosmetic:1.0 ./front-next'
    // sh 'docker build -t djangoreactdev/cosmetic-api:1.0 ./compose/local/django'

    withCredentials([
                    file(credentialsId: 'env_file_django', variable: 'ENV_django'),
                    file(credentialsId: 'env_file_postgres', variable: 'ENV_postgres')
                ]) {
                    sh '
                        # django env
                        # Extract the contents of the credentials file to a temporary directory
                        tmp_dir=$(mktemp -d)
                        tar -xf ${ENV_django} -C ${tmp_dir}

                        # Copy the files from the temporary directory to your desired location
                        cp -R ${tmp_dir}/folder_with_files /.envs/.production/.django

                        # postgres env
                        tar -xf ${ENV_postgres} -C ${tmp_dir}
                        cp -R ${tmp_dir}/folder_with_files /.envs/.production/.postgres
                  '
                }
    sh 'docker compose -f production.yml build django front dashboard'
    withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {

        sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
        sh 'docker push djangoreactdev/cosmetic-front:1.0'
        sh 'docker push djangoreactdev/cosmetic-api:1.0'
        sh 'docker push djangoreactdev/cosmetic-dashboard:1.0'
    }
} 

// def deployApp() {
//     echo 'deploying the application...'
//     sh 'docker pull djangoreactdev/cosmetic:1.0'
//     sh 'docker stop cosmetic || true'
//     sh 'docker rm cosmetic || true'
//     sh 'docker rmi cosmetic || true'
//     sh 'docker pull djangoreactdev/cosmetic:1.0'
//     sh 'docker run -d --name cosmetic -p 82:3000 djangoreactdev/cosmetic:1.0'
// } 

return this
