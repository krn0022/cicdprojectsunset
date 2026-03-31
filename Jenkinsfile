pipeline {
    agent any

    environment {
        IMAGE_NAME = "cicdprojectsunset"
        CONTAINER_NAME = "cicdprojectsunset-container"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop %CONTAINER_NAME% || exit 0'
                bat 'docker rm %CONTAINER_NAME% || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }
    }
}