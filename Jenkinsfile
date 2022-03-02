pipeline {
	environment {
		registry = "ic7cr01/angular-app"
		registryCredential = 'acr'
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
					docker.withRegistry('https://ic7cr01.azurecr.io/', registryCredential ) {
					dockerImage.push()
					}
				}
			}
		}
	}
}