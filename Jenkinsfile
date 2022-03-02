pipeline {
	environment {
		registry = "hmaussa1/angular-app"
		registryCredential = 'dockerhub'
		dockerImage = ''
	}
	agent any
	stages {
		stage('Cloning our Git') {
			steps {
				git 'https://icloudseven.visualstudio.com/IC7%20MICROSERVICES/_git/IC7%20MICROSERVICES'
			}
		}
		stage('Building our image') {
		    steps{
		        script {
					dockerImage = docker.build registry + ":$BUILD_NUMBER"
				}
		    }
		}
		stage('Deploy our image') {
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
					dockerImage.push()
					}
				}
			}
		}
	}
}