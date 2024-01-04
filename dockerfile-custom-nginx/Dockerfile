FROM ubuntu:latest

ENV CUSTOM_ENV my_env

RUN apt update \
	&& apt install -y nginx

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
