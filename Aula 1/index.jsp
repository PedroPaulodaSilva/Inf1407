<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Boas vindas</title>
</head>
<body>
Página JSP

<hr>

<%
for(int i=0; i < 5+Math.random()*5; i++) {
/* Esse laço imprime aleatoriamente a frase abaixo entre 1 a 5*/
%>

Hi my friend :)
<br/>

<%
}
%>

</body>
</html>
