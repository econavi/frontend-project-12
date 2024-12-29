build:
	rm -rf frontend/dist
	npm run build

start:
	npm run start

dev:
	npm run dev --prefix frontend

lint:
	npm run lint --prefix frontend