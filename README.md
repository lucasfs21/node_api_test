# node_api_test
O objetivo deste projeto é desenvolver uma API para uma votação.

Dados persistidos em banco de dados MySQL

### Dependencies
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mysql2": "^2.2.5"
    
### SQL COMMANDS
```sql
CREATE SCHEMA `node_test` ;

CREATE TABLE `node_test`.`participants` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `participant_key` VARCHAR(64) NULL,
  `name` VARCHAR(2) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `participant_key_UNIQUE` (`participant_key` ASC) VISIBLE);

ALTER TABLE `node_test`.`participants` 
CHANGE COLUMN `participant_key` `participant_key` VARCHAR(64) NOT NULL ,
CHANGE COLUMN `name` `name` VARCHAR(2) NOT NULL ;

CREATE TABLE `node_test`.`votes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `participant_key` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_votes_1_idx` (`participant_key` ASC) VISIBLE,
  CONSTRAINT `fk_votes_1`
    FOREIGN KEY (`participant_key`)
    REFERENCES `node_test`.`participants` (`participant_key`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


INSERT INTO `node_test`.`participants` (`participant_key`, `name`) VALUES ('f17bc320-5546-47df-ab44-ab4bfe6470f0', 'A');

INSERT INTO `node_test`.`participants` (`participant_key`, `name`) VALUES ('93aa59ea-8116-4355-94b9-dedfe0564ef2', 'B');
```

#### Configurações de conexão com o Banco de Dados
![Configurações de conexão da API com o banco de dados](https://uploaddeimagens.com.br/images/003/320/010/full/Screenshot_from_2021-07-04_14-25-08.png?1625419549)
![Configurações de conexão da API com o banco de dado](https://uploaddeimagens.com.br/images/003/320/009/full/Screenshot_from_2021-07-04_14-24-56.png?1625419536)


#### Demais configurações da API
![Configurações da API](https://uploaddeimagens.com.br/images/003/320/007/full/Screenshot_from_2021-07-04_14-19-20.png?1625419339)
![Configurações da API](https://uploaddeimagens.com.br/images/003/320/013/full/Screenshot_from_2021-07-04_14-20-32.png?1625419763)


#### Rotas para verbos GET e POST
![Rota para verbo GET](https://uploaddeimagens.com.br/images/003/320/014/full/Screenshot_from_2021-07-04_14-20-45.png?1625419808)
![Rota para verbo POST](https://uploaddeimagens.com.br/images/003/320/015/full/Screenshot_from_2021-07-04_14-20-57.png?1625419865)


#### Teste de votos para participante A
![Teste de votos para participante A](https://uploaddeimagens.com.br/images/003/320/020/full/Screenshot_from_2021-07-04_14-36-12.png?1625420294)
![Teste de votos para participante A](https://uploaddeimagens.com.br/images/003/320/022/full/Screenshot_from_2021-07-04_14-36-24.png?1625420305)
![Teste de votos para participante A](https://uploaddeimagens.com.br/images/003/320/023/full/Screenshot_from_2021-07-04_14-36-48.png?1625420314)


#### Teste de votos para participante B
![Teste de votos para participante B](https://uploaddeimagens.com.br/images/003/320/026/full/Screenshot_from_2021-07-04_14-41-39.png?1625420555)
![Teste de votos para participante B](https://uploaddeimagens.com.br/images/003/320/027/full/Screenshot_from_2021-07-04_14-41-47.png?1625420588)
![Teste de votos para participante B](https://uploaddeimagens.com.br/images/003/320/029/full/Screenshot_from_2021-07-04_14-42-10.png?1625420615)


#### Teste de votos para participante não existente
![Teste de votos para participante não existente](https://uploaddeimagens.com.br/images/003/320/031/full/Screenshot_from_2021-07-04_14-45-38.png?1625420775)
![Teste de votos para participante não existente](https://uploaddeimagens.com.br/images/003/320/032/full/Screenshot_from_2021-07-04_14-45-59.png?1625420806)
