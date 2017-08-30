<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<%!
int a = 0;
%>
<%
int b = 0;
int c;
int d;
int f;
%>
</head>
<body>
<h1>Página 2</h1>
<%
synchronized(this){
	a++;
}
b++;
out.print("A = " + a + "<br/>");
out.print("B = " + b + "<br/>");

//atributo de request
try{
	c = (int)request.getAttribute("c");
}
catch(Exception e){
	c = 0;
}
c++;
out.print("C = " + c + "<br/>");

//atributo de session
try{
	d = (int)session.getAttribute("d");
}
catch(Exception e){
	d = 0;
}
d++;
session.setAttribute("d", d);
out.print("D = " + d + "<br/>");

//atributo de application

synchronized(application){
	try{
		f = (int)application.getAttribute("f");
	}
	catch(Exception e){
		f = 0;
	}
	f++;
	application.setAttribute("f", f);
}
out.print("F = " + f + "<br/>");
%>
</body>
</html>
