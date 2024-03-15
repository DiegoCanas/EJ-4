pipeline {
    agent any
    stages {
        stage ('Checkout'){
            steps{
                script{
                    checkout([$class: 'GitSCM', 
                        branches: [[name: '*/main']], 
                        userRemoteConfigs: [[credentialsId: 'MD-TOKEN', url: 'https://github.com/DiegoCanas/EJ-1']]])
                }
               
            }
        }

        stage ('Instalacion de dependencias'){
            steps{
                sh 'npm install'
            }

        }

        stage ('Linteo'){
            steps{
                echo("hola")
            }

        }

        stage ('Test'){
            steps{
                echo("hola")
            }

        }

        stage ('Build'){
            steps{
                echo("hola")
            }

        }
    }
}