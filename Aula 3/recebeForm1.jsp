<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Dados do Formulario</title>
</head>
<body>

Oi 
<%	
String nome;
nome = request.getParameter("campoNome");
out.print(nome);
%>!<br/>
A sua senha é <%=request.getParameter("camposenha")%><br/>
<%
if(request.getParameter("2")!=null) out.print("2a feira<br/>");
if(request.getParameter("3")!=null) out.print("3a feira<br/>");
if(request.getParameter("4")!=null) out.print("4a feira<br/>");
if(request.getParameter("5")!=null) out.print("5a feira<br/>");
if(request.getParameter("6")!=null) out.print("6a feira<br/>");
%>
</body>
</html>
