def buildJar() {
    echo "building the application..."
    sh 'pwd'
} 

def buildImage() {
    echo "building the docker image..."
    // sh 'docker build -t djangoreactdev/cosmetic:1.0 ./front-next'
    // sh 'docker build -t djangoreactdev/cosmetic-api:1.0 ./compose/local/django'

    withCredentials([
            file(credentialsId: 'env_file_cosmetic_django', variable: 'ENV_cosmetic_django'),
            file(credentialsId: 'env_file_cosmetic_postgres', variable: 'ENV_cosmetic_postgres')
        ]) {
            writeFile file: '.envs/.production/.django', text: readFile(ENV_cosmetic_django)
            writeFile file: '.envs/.production/.postgres', text: readFile(ENV_cosmetic_postgres)
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
