def buildJar() {
    echo "building the application..."
    sh 'pwd'
} 

def buildImage() {
    echo "building the docker image..."
    withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
        sh 'docker build -t djangoreactdev/cosmetic:1.0 ./front-next'
        sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
        sh 'docker push djangoreactdev/cosmetic:1.0'
    }
} 

def deployApp() {
    echo 'deploying the application...'
    sh 'docker pull djangoreactdev/cosmetic:1.0'
    sh 'docker stop cosmetic || true'
    sh 'docker rm cosmetic || true'
    sh 'docker rmi cosmetic || true'
    sh 'docker pull djangoreactdev/cosmetic:1.0'
    sh 'docker run -d --name cosmetic -p 80:3000 djangoreactdev/cosmetic:1.0'
} 

return this
