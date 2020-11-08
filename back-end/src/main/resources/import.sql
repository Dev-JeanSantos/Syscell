
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_role (authority) VALUES ('ROLE_COORD');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBRO');

INSERT INTO tb_church (name, email, cnpj, address, number, complement, city, state, tel_Fixo, tel_Celular, date_Register, date_Fundation, img_Url) VALUES ('Igreja Pentecostal Fogo Puro', 'fogopuro@gmail.com', '123.345.567/0001 - 20', 'Rua Manoel Novis Bairro - Centro', 430,'',  'Tanguá', 'RIO DE JANEIRO', '21-2747-5433', '21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z','https://3.bp.blogspot.com/-kP2XGsD9tKs/VHoeL2eHOzI/AAAAAAAAAYc/oJua2APL3Qw/s400/1960102_864662776906901_8725446930772589636_n.jpg');
INSERT INTO tb_church (name, email, cnpj, address, number, complement, city, state, tel_Fixo, tel_Celular, date_Register, date_Fundation, img_Url) VALUES ('Igreja Metodista', 'metodista@gmail.com', '321.345.567/0001 - 33', 'Rua Manoel Novis Bairro - Centro', 430,'',  'Tanguá', 'RIO DE JANEIRO', '21-2747-5433', '21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z','https://3.bp.blogspot.com/-kP2XGsD9tKs/VHoeL2eHOzI/AAAAAAAAAYc/oJua2APL3Qw/s400/1960102_864662776906901_8725446930772589636_n.jpg');
INSERT INTO tb_church (name, email, cnpj, address, number, complement, city, state, tel_Fixo, tel_Celular, date_Register, date_Fundation, img_Url) VALUES ('Igreja Congrecional', 'congregacional@gmail.com', '456.345.567/0001 - 65', 'Rua Manoel Novis Bairro - Centro', 430,'',  'Tanguá', 'RIO DE JANEIRO', '21-2747-5433', '21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z','https://3.bp.blogspot.com/-kP2XGsD9tKs/VHoeL2eHOzI/AAAAAAAAAYc/oJua2APL3Qw/s400/1960102_864662776906901_8725446930772589636_n.jpg');

INSERT INTO tb_cell (name, leader, host, address, tel_Celular, start_Moment, end_Moment, church_id) VALUES ('Vidas Importa', 'Jean Santos','Pedro Cardoso','Rua Manoel Novis 430 Bairro - Centro','21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z', 1);
INSERT INTO tb_cell (name, leader, host, address, tel_Celular, start_Moment, end_Moment, church_id) VALUES ('Amor e Fé', 'Claudio Lins','Deivid Brasil','Rua S S/N Bairro - Amerinda','21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z', 1);
INSERT INTO tb_cell (name, leader, host, address, tel_Celular, start_Moment, end_Moment, church_id) VALUES ('Abraço Fraternal', 'Flavio Guedes','Beto Barbosa','Rua Acacias 30 Bairro - Lomngado','21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z', 1);
INSERT INTO tb_cell (name, leader, host, address, tel_Celular, start_Moment, end_Moment, church_id) VALUES ('YEHOSHUA', 'Silvio Lopes','Mike Lima','Rua 23 Lt 3  Bairro - Girafas','21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z', 2);
INSERT INTO tb_cell (name, leader, host, address, tel_Celular, start_Moment, end_Moment, church_id) VALUES ('FÉ E SALVAÇÃO', 'Adrinao Silva','Genilson Dias','Rua Mirian Dias 878 Bairro - Centro','21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z', 2);
INSERT INTO tb_cell (name, leader, host, address, tel_Celular, start_Moment, end_Moment, church_id) VALUES ('AMOR E PAZ', 'Pedro Soares','Marcos SIlve','Rua bartolomeu koye Bairro - Hunijd','21-93933-4333',TIMESTAMP WITH TIME ZONE '2020-07-13T20:50:07.12345Z', TIMESTAMP WITH TIME ZONE '2000-01-03T20:50:07.12345Z', 3);

INSERT INTO tb_user (name, email, password, genre, address, number, bairro, city, tel_Fixo, tel_Celular, img_Url, cell_id, church_id) VALUES ('Jean Santos', 'jeancbsan@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Masculino', 'Rua Manoel Novis', 201, 'Centro', 'Tanguá', '21-2747-1489', '21-979932737', 'https://avatars2.githubusercontent.com/u/69737234?s=460&u=52b04d21b481ad8fa582410d30084534dde0e483&v=4',1, 2);
INSERT INTO tb_user (name, email, password, genre, address, number, bairro, city, tel_Fixo, tel_Celular, img_Url, cell_id, church_id) VALUES ('Camilla Santos', 'camilla@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Feminino', 'Rua Manoel Novis', 201, 'Centro', 'Tanguá', '21-2747-1489', '21-979932737', 'https://avatars2.githubusercontent.com/u/69737234?s=460&u=52b04d21b481ad8fa582410d30084534dde0e483&v=4',2, 2);
INSERT INTO tb_user (name, email, password, genre, address, number, bairro, city, tel_Fixo, tel_Celular, img_Url, cell_id, church_id) VALUES ('Jean Duarte', 'jeand@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Masculino', 'Rua Manoel Novis', 201, 'Centro', 'Tanguá', '21-2747-1489', '21-979932737', 'https://avatars2.githubusercontent.com/u/69737234?s=460&u=52b04d21b481ad8fa582410d30084534dde0e483&v=4',1, 1);

INSERT INTO tb_study (name, date_study, description) VALUES ('ESTUDO APOCALIPTICO I',TIMESTAMP WITH TIME ZONE '2020-03-13T20:50:07.12345Z', 'BASEADO  DO 1º AO 5º CAPITULO LIVRO APOCALIPSE ESCRITO POR JOÃO' );
INSERT INTO tb_study (name, date_study, description) VALUES ('ESTUDO APOCALIPTICO II',TIMESTAMP WITH TIME ZONE '2020-03-20T20:50:07.12345Z', 'BASEADO DO 6º AO 10º CAPITULO LIVRO APOCALIPSE ESCRITO POR JOÃO' );
INSERT INTO tb_study (name, date_study, description) VALUES ('ESTUDO APOCALIPTICO II',TIMESTAMP WITH TIME ZONE '2020-03-27T20:50:07.12345Z', 'BASEADO DO 11º AO 15º CAPITULO LIVRO APOCALIPSE ESCRITO POR JOÃO' );
INSERT INTO tb_study (name, date_study, description) VALUES ('ESTUDO APOCALIPTICO IV',TIMESTAMP WITH TIME ZONE '2020-04-04T20:50:07.12345Z', 'BASEADO DO 16º AO 20º CAPITULO LIVRO APOCALIPSE ESCRITO POR JOÃO' );
INSERT INTO tb_study (name, date_study, description) VALUES ('ESTUDO APOCALIPTICO V',TIMESTAMP WITH TIME ZONE '2020-04-13T20:50:07.12345Z', 'BASEADO DO 21º AO 30º CAPITULOLIVRO APOCALIPSE ESCRITO POR JOÃO' );

INSERT INTO tb_notification (text, moment, read, route,user_id) VALUES ('ESTUDO APOCALIPTICO I JÁ DISPONIVEL NA PLATAFORMA ',TIMESTAMP WITH TIME ZONE '2020-04-13T20:50:07.12345Z',false,'LINK', 1 );
INSERT INTO tb_notification (text, moment, read, route,user_id) VALUES ('ESTUDO APOCALIPTICO II JÁ DISPONIVEL NA PLATAFORMA ',TIMESTAMP WITH TIME ZONE '2020-04-13T20:50:07.12345Z',false,'LINK', 2 );
INSERT INTO tb_notification (text, moment, read, route,user_id) VALUES ('ESTUDO APOCALIPTICO III JÁ DISPONIVEL NA PLATAFORMA ',TIMESTAMP WITH TIME ZONE '2020-04-13T20:50:07.12345Z',false,'LINK', 3 );
INSERT INTO tb_notification (text, moment, read, route,user_id) VALUES ('ESTUDO APOCALIPTICO IV JÁ DISPONIVEL NA PLATAFORMA ',TIMESTAMP WITH TIME ZONE '2020-04-13T20:50:07.12345Z',false,'LINK', 2);
INSERT INTO tb_notification (text, moment, read, route,user_id) VALUES ('ESTUDO APOCALIPTICO V JÁ DISPONIVEL NA PLATAFORMA ',TIMESTAMP WITH TIME ZONE '2020-04-13T20:50:07.12345Z',false,'LINK', 1);

INSERT INTO tb_resource (title, description, position, img_url, type, study_id ) VALUES ('Vídeos','Recursos em Videos em FULL HD e qualidade alta qualidade de som', 1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1, 1);
INSERT INTO tb_resource (title, description, position, img_url, type, study_id ) VALUES ('PDF','Recursos em PDF para impressão', 2,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1, 1);
INSERT INTO tb_resource (title, description, position, img_url, type, study_id ) VALUES ('Questionários','Questionários Onlines', 3,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1, 1);
INSERT INTO tb_resource (title, description, position, img_url, type, study_id ) VALUES ('Exercicios Online','Exercicios Interativos', 4,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1, 1);
INSERT INTO tb_resource (title, description, position, img_url, type, study_id ) VALUES ('Avaliação','Avaliação Final', 5,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1, 1);

INSERT INTO tb_section (title, description, position, img_url, resource_id ) VALUES ('Capitulo I','Tudos Sobre o capitulo I', 1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1);
INSERT INTO tb_section (title, description, position, img_url, resource_id ) VALUES ('Capitulo II','Tudos Sobre o capitulo II', 1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1);
INSERT INTO tb_section (title, description, position, img_url, resource_id ) VALUES ('Capitulo III','Tudos Sobre o capitulo III', 1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 1);
INSERT INTO tb_section (title, description, position, img_url, resource_id ) VALUES ('Capitulo IV','Tudos Sobre o capitulo IV', 1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 2);
INSERT INTO tb_section (title, description, position, img_url, resource_id ) VALUES ('Capitulo V','Tudos Sobre o capitulo V', 1,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBCFoY3CRFRFS1_OMFCMoF2x54AcRo3bQWKA&usqp=CAU', 2);


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 3);

INSERT INTO tb_study_cell (cell_id, study_id) VALUES (1, 1);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (1, 2);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (1, 3);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (1, 4);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (1, 5);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (2, 1);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (2, 2);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (2, 3);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (2, 4);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (2, 5);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (3, 1);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (3, 2);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (3, 3);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (3, 4);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (3, 5);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (4, 1);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (4, 2);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (4, 3);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (4, 4);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (4, 5);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (5, 1);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (5, 2);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (5, 3);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (5, 4);
INSERT INTO tb_study_cell (cell_id, study_id) VALUES (5, 5);
