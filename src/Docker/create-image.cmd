docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba_2/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proba_2/app ../..
