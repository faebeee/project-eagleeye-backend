build:
	docker build -f ./Dockerfile -t faebeee/eagleeye-backend:latest .

run:
	docker run --env AUTH_SECRET="Zcn1j1QTfHP2ab&atdFc" -p 8080:8080 --name eagleeye-backend faebeee/eagleeye-backend
