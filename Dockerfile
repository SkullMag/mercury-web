FROM nginx:latest

# COPY build /usr/share/nginx/html 
COPY privacy-policy.html /usr/share/nginx/html
COPY planets-privacy-policy.html /usr/share/nginx/html
COPY terms-of-use.html /usr/share/nginx/html
COPY landing /usr/share/nginx/html
COPY mercurydict.com.crt /etc/ssl/mercurydict.com.crt
COPY mercurydict.com.key /etc/ssl/mercurydict.com.key
COPY ca.crt /etc/ssl/ca.crt
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
