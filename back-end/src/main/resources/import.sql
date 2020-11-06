INSERT INTO tb_user (name, email, password, genre, address, number, bairro, city, tel_Fixo, tel_Celular, img_Url) VALUES ('Jean Santos', 'jean@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Masculinno', 'Rua Manoel Novis', 201, 'Centro', 'Tanguá', '21-2747-1489', '21-979932737', 'https://avatars2.githubusercontent.com/u/69737234?s=460&u=52b04d21b481ad8fa582410d30084534dde0e483&v=4');
INSERT INTO tb_user (name, email, password, genre, address, number, bairro, city, tel_Fixo, tel_Celular, img_Url) VALUES ('Camilla Santos', 'camilla@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Masculinno', 'Rua Manoel Novis', 201, 'Centro', 'Tanguá', '21-2747-1489', '21-979932737', 'https://avatars2.githubusercontent.com/u/69737234?s=460&u=52b04d21b481ad8fa582410d30084534dde0e483&v=4');
INSERT INTO tb_user (name, email, password, genre, address, number, bairro, city, tel_Fixo, tel_Celular, img_Url) VALUES ('Jean Duarte', 'jeand@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG', 'Masculinno', 'Rua Manoel Novis', 201, 'Centro', 'Tanguá', '21-2747-1489', '21-979932737', 'https://avatars2.githubusercontent.com/u/69737234?s=460&u=52b04d21b481ad8fa582410d30084534dde0e483&v=4');

INSERT INTO tb_role (authority) VALUES ('ROLE_SUPER_ADMIN');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');
INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 3);

