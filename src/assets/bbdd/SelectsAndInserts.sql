select * from portfolio.persona;

insert into portfolio.persona (dni,nombre,apellido,profesion,presentacion,twitter,facebook,email)
values (30269340,"Luis Salvador Augusto","Terminiello","Desarrollador Full Stack Web Junior","Soy estudiante avanzado de la Lic en Economía en la UBA. Tengo experiencia de más de diez años trabajando en área de QA de la DGSIAF, principalmente en testing funcional y en los últimos años en automation.","https://twitter.com/luchoyvuelvo2","https://www.facebook.com/Luichi923","luis.termi.i@gmail.com");

select * from portfolio.educacion;

insert into portfolio.educacion (anio_inicio,anio_fin,titulo,institucion,persona_id)
values (1996,2000,"Bachiller","Instituto Superior Martín Güemes",(select id from portfolio.persona where dni = 30269340)),
(2001,null,"Licenciatura en Economía","Universidad de Buenos Aires",(select id from portfolio.persona where dni = 30269340)),
(2021,2022,"#SeProgramar. Argentina Programa","Secretaría de Economía del Conocimiento",(select id from portfolio.persona where dni = 30269340)),
(2022,null,"#YoProgramo. Argentina Programa","Secretaría de Economía del Conocimiento",(select id from portfolio.persona where dni = 30269340));

select * from portfolio.experiencia;

insert into portfolio.experiencia (anio_inicio,anio_fin,descripcion,organizacion,persona_id)
values (2005,2007,"QA Funcional","DGSIAF. Secretaría de Hacienda",(select id from portfolio.persona where dni = 30269340)),
(2007,2010,"Trabajos Varios","Viaje por países de Europa",(select id from portfolio.persona where dni = 30269340)),
(2010,2019,"QA Funcional","DGSIAF. Secretaría de Hacienda",(select id from portfolio.persona where dni = 30269340)),
(2020,2021,"Trabajos Varios", "Viaje por países de Sudamérica",(select id from portfolio.persona where dni = 30269340)),
(2021,null,"QA Automation","DGSIAF. Secretaría de Hacienda",(select id from portfolio.persona where dni = 30269340));

select * from portfolio.proyecto;

insert into portfolio.proyecto (titulo,descripcion,url,persona_id)
values ("Portfolio Personal","Proyecto de Portfolio Personal para la segunda etapa del Argentina Programa, #YoProgramo","http://localhost:4200/",(select id from portfolio.persona where dni = 30269340)),
("Proyecto Prueba Carga","Proyecto para la prueba de carga inicial","#",(select id from portfolio.persona where dni = 30269340)); 

select * from portfolio.skill;

insert into portfolio.skill (habilidad,porcentaje,persona_id) 
values ("Inglés",60,(select id from portfolio.persona where dni = 30269340)),
("Portugués",60,(select id from portfolio.persona where dni = 30269340)),
("Italiano",40,(select id from portfolio.persona where dni = 30269340)),
("Trabajo en Equipo",80,(select id from portfolio.persona where dni = 30269340)),
("Proactividad",80,(select id from portfolio.persona where dni = 30269340));

/*
commit
*/