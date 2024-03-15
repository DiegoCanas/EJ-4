pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage ('🏁Checkout'){
            steps{
                script{
                    checkout([$class: 'GitSCM', 
                        branches: [[name: '*/main']], 
                        userRemoteConfigs: [[credentialsId: 'MD-TOKEN', url: 'https://github.com/DiegoCanas/EJ-1']]])
                }
               
            }
        }

        stage ('⬇️Instalacion de dependencias'){
            steps{
                script {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm install'
                }                
            }

        }

        stage ('🥽Linteo'){
            steps{
                echo("Linting...")
            }

        }

        stage ('🧪Test'){
            steps{
                sh 'npm test'
            }

        }

        stage ('🔨Build'){
            steps{
                echo("hola")
            }

        }
    }
}