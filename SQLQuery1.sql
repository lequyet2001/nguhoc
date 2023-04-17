CREATE TABLE CAUTHU (
   MACT NUMERIC IDENTITY(1,1) PRIMARY KEY NOT NULL,
   HOTEN NVARCHAR(100) NOT NULL,
   VITRI NVARCHAR(20) NOT NULL,
   NGAYSINH DATETIME NOT NULL,
   DIACHI NVARCHAR(200) NOT NULL,
   MACLB VARCHAR(5) NOT NULL,
   MAQG VARCHAR(5) NOT NULL,
   SO INT NOT NULL,
  
);
CREATE TABLE QUOCGIA (
   MAQG VARCHAR(5) PRIMARY KEY NOT NULL,
   TENQG NVARCHAR(60) NOT NULL,
);
CREATE TABLE CAULACBO (
   MACLB VARCHAR(5) PRIMARY KEY NOT NULL,
   TENCLB NVARCHAR(100) NOT NULL,
   MASAN VARCHAR(5) NOT NULL,
   MATINH VARCHAR(5) NOT NULL,
);
CREATE TABLE TINH (
   MATINH VARCHAR(5) PRIMARY KEY NOT NULL,
   TENTINH NVARCHAR(100) NOT NULL,
);
CREATE TABLE SANVD (
   MASAN VARCHAR(5) PRIMARY KEY NOT NULL,
   TENSAN NVARCHAR(100) NOT NULL,
   DIACHI NVARCHAR(200) NOT NULL,
);
CREATE TABLE HUANLUYENVIEN (
   MAHLV VARCHAR(5) PRIMARY KEY NOT NULL,
   MACLB VARCHAR(5) NOT NULL,
   VAITRO NVARCHAR(100) NOT NULL,
);
CREATE TABLE HLV_CLB (
   MAHLV VARCHAR(5) NOT NULL ,
   MACLB VARCHAR(5) NOT NULL ,
   VAITRO NVARCHAR(100) NOT NULL,
   PRIMARY KEY (MAHLV,MACLB)
);
CREATE TABLE TRANDAU (
   MATRAN VARCHAR(5)  PRIMARY KEY NOT NULL ,
   NAM INT  NOT NULL,
   VONG INT NOT NULL,
   NGAYTD DATETIME NOT NULL,
   MACLB1 VARCHAR(5)  NOT NULL,
   MACLB2 VARCHAR(5)  NOT NULL,
   MASAN VARCHAR(5) NOT NULL,
   KETQUA VARCHAR(5) NOT NULL,
);
CREATE TABLE BANGXH (
   MACLB VARCHAR(5) NOT NULL ,
   NAM INT  NOT NULL,
   VONG INT NOT NULL,
   SOTRAN INT NOT NULL,
   THANG VARCHAR(5)  NOT NULL,
   HOA VARCHAR(5)  NOT NULL,
   THUA VARCHAR(5) NOT NULL,
   HIEUSO VARCHAR(5) NOT NULL,
   DIEM INT NOT NULL,
   HANG INT NOT NULL,
    PRIMARY KEY (MACLB,NAM,VONG)
);




















