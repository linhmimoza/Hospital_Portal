USE [master]
GO
/****** Object:  Database [Hospital_Portal_Commit]    Script Date: 3/27/2018 11:46:31 PM ******/
CREATE DATABASE [Hospital_Portal_Commit]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Hospital_Postal', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.TUNGSQLSERVER\MSSQL\DATA\Hospital_Postal.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Hospital_Postal_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.TUNGSQLSERVER\MSSQL\DATA\Hospital_Postal_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Hospital_Portal_Commit] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Hospital_Portal_Commit].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Hospital_Portal_Commit] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET ARITHABORT OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET RECOVERY FULL 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET  MULTI_USER 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Hospital_Portal_Commit] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Hospital_Portal_Commit] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Hospital_Portal_Commit]
GO
/****** Object:  Table [dbo].[Article]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Article](
	[ArticleId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[CategoryId] [int] NULL,
	[UploadBy] [int] NOT NULL,
	[UploadDate] [datetime] NOT NULL,
	[UpdateBy] [int] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
	[Link] [nvarchar](50) NOT NULL,
	[Describe] [nvarchar](100) NULL,
 CONSTRAINT [PK_Article] PRIMARY KEY CLUSTERED 
(
	[ArticleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BookingNumber]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookingNumber](
	[BookingNumber] [int] IDENTITY(1,1) NOT NULL,
	[BookingId] [int] NOT NULL,
 CONSTRAINT [PK_BookingNumber] PRIMARY KEY CLUSTERED 
(
	[BookingNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[CategoryId] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[CategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Department]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[DepartmentId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Introduce]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Introduce](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nchar](10) NOT NULL,
	[IntroduceContent] [nvarchar](600) NOT NULL,
	[Status] [int] NOT NULL,
	[UploadBy] [int] NOT NULL,
	[UploadDay] [datetime] NOT NULL,
	[UpdateBy] [int] NOT NULL,
	[UpdateDay] [datetime] NOT NULL,
 CONSTRAINT [PK_Introduce] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MedicalBooking]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MedicalBooking](
	[BookingId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
	[TimeId] [int] NOT NULL,
	[CreateDate] [date] NULL,
	[GuestName] [nvarchar](50) NOT NULL,
	[GuestPhone] [nvarchar](50) NOT NULL,
	[GuestEmail] [nvarchar](50) NOT NULL,
	[GuestAddress] [nvarchar](600) NOT NULL,
	[GuestIdentity] [int] NOT NULL,
	[Note] [nvarchar](500) NULL,
 CONSTRAINT [PK_MedicalBooking] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Meeting]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Meeting](
	[MeetingId] [int] IDENTITY(1,1) NOT NULL,
	[RoomId] [int] NOT NULL,
	[MeetingName] [nvarchar](50) NOT NULL,
	[StartTime] [datetime] NOT NULL,
	[EndTime] [datetime] NOT NULL,
	[Content] [nvarchar](500) NULL,
	[Note] [nvarchar](500) NULL,
	[CreateBy] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateBy] [int] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Meeting] PRIMARY KEY CLUSTERED 
(
	[MeetingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Mission]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Mission](
	[MissionId] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[Place] [nvarchar](500) NOT NULL,
	[Content] [nvarchar](500) NOT NULL,
	[Note] [nvarchar](500) NULL,
	[Status] [int] NOT NULL,
	[Createby] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[Updateby] [int] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Mission] PRIMARY KEY CLUSTERED 
(
	[MissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MissionWorker]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MissionWorker](
	[MissionWorkerId] [int] IDENTITY(1,1) NOT NULL,
	[MissionId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_MissionWorker] PRIMARY KEY CLUSTERED 
(
	[MissionWorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notification]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[NotificationId] [int] IDENTITY(1,1) NOT NULL,
	[NotificationName] [nvarchar](50) NOT NULL,
	[Content] [nvarchar](500) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[CreateBy] [int] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[UpdateBy] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[NotificationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Number]    Script Date: 3/27/2018 11:46:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Number](
	[MedicalBookingId] [int] NOT NULL,
	[SpecialistId] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
	[TimeId] [int] NOT NULL,
	[Number] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Number] PRIMARY KEY CLUSTERED 
(
	[MedicalBookingId] ASC,
	[SpecialistId] ASC,
	[ServiceId] ASC,
	[TimeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[RoleId] [int] NOT NULL,
	[RoleName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Room]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Room](
	[RoomId] [int] IDENTITY(1,1) NOT NULL,
	[RoomName] [nvarchar](50) NOT NULL,
	[RoomSize] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Room] PRIMARY KEY CLUSTERED 
(
	[RoomId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Service]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[ServiceId] [int] IDENTITY(1,1) NOT NULL,
	[ServiceName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[DepartmentId] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Service] PRIMARY KEY CLUSTERED 
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shift]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shift](
	[ShiftId] [int] IDENTITY(1,1) NOT NULL,
	[ShiftNO] [int] NOT NULL,
	[StartTime] [time](7) NOT NULL,
	[EndTime] [time](7) NOT NULL,
	[ShiftDayID] [int] NOT NULL,
	[Other] [nvarchar](300) NULL,
 CONSTRAINT [PK_WorkShift] PRIMARY KEY CLUSTERED 
(
	[ShiftId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShiftDay]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftDay](
	[ShiftDayID] [int] IDENTITY(1,1) NOT NULL,
	[ShiftDay] [date] NOT NULL,
	[DayInWeek] [nvarchar](50) NOT NULL,
	[ShiftScheduleId] [int] NOT NULL,
 CONSTRAINT [PK_WorkDay] PRIMARY KEY CLUSTERED 
(
	[ShiftDayID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShiftSchedule]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftSchedule](
	[ShiftScheduleId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NOT NULL,
	[Status] [int] NOT NULL,
	[Createby] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Updateby] [int] NOT NULL,
 CONSTRAINT [PK_ShiftSchedule] PRIMARY KEY CLUSTERED 
(
	[ShiftScheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ShiftWorker]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftWorker](
	[ShiftWorkerId] [int] IDENTITY(1,1) NOT NULL,
	[ShiftId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_ShiftWorker] PRIMARY KEY CLUSTERED 
(
	[ShiftWorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Specialist]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Specialist](
	[SpecialistId] [int] IDENTITY(10000,1) NOT NULL,
	[SpecialistName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NULL,
 CONSTRAINT [PK_Specialist] PRIMARY KEY CLUSTERED 
(
	[SpecialistId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Time]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Time](
	[TimeId] [int] IDENTITY(20000,1) NOT NULL,
	[Date] [date] NOT NULL,
	[Time] [nvarchar](50) NOT NULL,
	[Amount] [int] NOT NULL,
	[Available] [int] NOT NULL,
 CONSTRAINT [PK_Time] PRIMARY KEY CLUSTERED 
(
	[TimeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 3/27/2018 11:46:32 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Avatar] [nvarchar](100) NULL,
	[Email] [nvarchar](50) NOT NULL,
	[FullName] [nvarchar](50) NOT NULL,
	[Sex] [int] NOT NULL,
	[DayOfBirth] [date] NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[Phone] [nvarchar](50) NOT NULL,
	[Position] [nvarchar](50) NOT NULL,
	[Address] [nvarchar](600) NULL,
	[Certificate] [nvarchar](600) NULL,
	[Status] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Article] ON 

INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (1, N'List doctor', 1, 2, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 2, N'download.docx', NULL)
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (2, N'Tin 1', 1, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 5, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'tin so 1sdsssssssssssssssssssssssssssssssssss')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (3, N'Tin2', 1, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 5, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'tin tuc 2')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (4, N'Tin khoa mat 1', 4, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 5, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'tintuc')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (5, N'tin tuc update', 4, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'describe')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (7, N'Tin khoa nha 1', 6, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'tin tuc')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (8, N'Tin khoa nha 2', 6, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'tintuc')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (10, N'Tin tuc moi', 5, 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 2, CAST(N'2018-03-23T00:00:00.000' AS DateTime), 1, N'download.docx', N'Bệnh thường gặp ở lứa tuổi trung niên, người già gây hậu quả mất răng. Diễn tiến thầm ')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (11, N'medical news', 2, 1, CAST(N'2018-03-27T00:00:00.000' AS DateTime), 1, CAST(N'2018-03-27T00:00:00.000' AS DateTime), 2, N'thu.jpg', N'describe')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (12, N'Medical News', 2, 1, CAST(N'2018-03-27T00:00:00.000' AS DateTime), 1, CAST(N'2018-03-27T00:00:00.000' AS DateTime), 2, N'thu.jpg', N'describe')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (13, N'Medical News', 2, 1, CAST(N'2018-03-27T00:00:00.000' AS DateTime), 1, CAST(N'2018-03-27T00:00:00.000' AS DateTime), 2, N'thu.jpg', N'describe')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (14, N'medical news', 2, 1, CAST(N'2018-03-27T22:06:39.267' AS DateTime), 1, CAST(N'2018-03-27T22:06:39.267' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (15, N'medical news', 2, 1, CAST(N'2018-03-27T22:08:13.230' AS DateTime), 1, CAST(N'2018-03-27T22:08:13.230' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (16, N'medical news', 2, 1, CAST(N'2018-03-27T22:09:49.830' AS DateTime), 1, CAST(N'2018-03-27T22:09:49.830' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (17, N'medical news', 2, 1, CAST(N'2018-03-27T22:10:35.263' AS DateTime), 1, CAST(N'2018-03-27T22:10:35.263' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (18, N'a', 2, 1, CAST(N'2018-03-27T22:10:42.540' AS DateTime), 1, CAST(N'2018-03-27T22:10:42.540' AS DateTime), 2, N'abc', N'abc')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (19, N'medical news', 2, 1, CAST(N'2018-03-27T22:10:42.540' AS DateTime), 1, CAST(N'2018-03-27T22:10:42.540' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (20, N'medical news', 2, 1, CAST(N'2018-03-27T22:15:21.663' AS DateTime), 1, CAST(N'2018-03-27T22:15:21.663' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (21, N'medical news', 2, 1, CAST(N'2018-03-27T22:15:51.237' AS DateTime), 1, CAST(N'2018-03-27T22:15:51.237' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (22, N'medical news', 2, 1, CAST(N'2018-03-27T22:16:38.530' AS DateTime), 1, CAST(N'2018-03-27T22:16:38.530' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (23, N'medical news', 2, 1, CAST(N'2018-03-27T22:18:28.573' AS DateTime), 1, CAST(N'2018-03-27T22:18:28.573' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (24, N'medical news', 2, 1, CAST(N'2018-03-27T22:21:40.860' AS DateTime), 1, CAST(N'2018-03-27T22:21:40.860' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (25, N'medical news', 2, 1, CAST(N'2018-03-27T22:21:56.470' AS DateTime), 1, CAST(N'2018-03-27T22:21:56.470' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (26, N'medical news', 2, 1, CAST(N'2018-03-27T22:23:13.763' AS DateTime), 1, CAST(N'2018-03-27T22:23:13.763' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (27, N'medical news', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'thu.jpg', N'medical news')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (28, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (29, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (30, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (31, N'a', 2, 1, CAST(N'2018-03-27T22:10:42.540' AS DateTime), 1, CAST(N'2018-03-27T22:10:42.540' AS DateTime), 2, N'abc', N'abc')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (32, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (33, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (34, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (35, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (36, N'abbc', 2, 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 1, CAST(N'2018-03-27T22:23:39.450' AS DateTime), 2, N'avc', N'fdsf')
SET IDENTITY_INSERT [dbo].[Article] OFF
SET IDENTITY_INSERT [dbo].[BookingNumber] ON 

INSERT [dbo].[BookingNumber] ([BookingNumber], [BookingId]) VALUES (1, 1)
INSERT [dbo].[BookingNumber] ([BookingNumber], [BookingId]) VALUES (2, 6)
INSERT [dbo].[BookingNumber] ([BookingNumber], [BookingId]) VALUES (3, 7)
INSERT [dbo].[BookingNumber] ([BookingNumber], [BookingId]) VALUES (4, 8)
SET IDENTITY_INSERT [dbo].[BookingNumber] OFF
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (1, N'Hospital Information', N'Hospital infromation, notification,contac', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (2, N'Medical news', N'Medical information, new, article..', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (3, N'Tin tức khoa da liễu', N'Tin tức khoa da liễu', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (4, N'Tin tức khoa mắt', N'Tin tức khoa mắt', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (5, N'Tin tức khoa tai mũi họng', N'Tin tức khoa tai mũi họng', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (6, N'Tin tức khoa nha', N'Tin tức khoa nha', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (7, N'Tin tức khoa sản', N'Tin tức khoa sản', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (8, N'Tin tức khoa tổng quát', N'Tin tức khoa tổng quát', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (9, N'Tin tức khoa tim mạch', N'Tin tức khoa tim mạch', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (10, N'Tin tức khoa tiêu hóa', N'Tin tức khoa tiêu hóa', 1)
SET IDENTITY_INSERT [dbo].[Category] OFF
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (1, N'Updated', N'new updated', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (2, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (3, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 2)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (4, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (5, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (6, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (7, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (8, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (9, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (10, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (11, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (12, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (13, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (14, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 2)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (15, N'create name', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (16, N'create name', N'new', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (17, N'new new', N'new new new ', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (18, N'Khoa da liễu', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (19, N'Khoa hô hấp', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (20, N'Khoa mắt', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (21, N'Khoa nha', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (22, N'Khoa sản', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (23, N'Khoa tổng quát', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (24, N'Khoa tim mạch', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (25, N'Khoa tiêu hóa', N'test', 1)
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status]) VALUES (26, N'Khoa tai mũi họng', N'test', 1)
SET IDENTITY_INSERT [dbo].[Department] OFF
SET IDENTITY_INSERT [dbo].[Meeting] ON 

INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [EndTime], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (3, 1, N'New Year meeting', CAST(N'2018-02-22T10:00:00.000' AS DateTime), CAST(N'2018-02-22T12:00:00.000' AS DateTime), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Meeting] OFF
SET IDENTITY_INSERT [dbo].[Mission] ON 

INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (1, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (2, CAST(N'2010-10-10' AS Date), CAST(N'2010-11-10' AS Date), N'Place', N'Content', N'Note', 1, 5, CAST(N'2010-10-10T00:00:00.000' AS DateTime), 5, CAST(N'2010-10-10T00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (3, CAST(N'2010-10-10' AS Date), CAST(N'2010-11-10' AS Date), N'Place', N'Content', N'Note', 1, 5, CAST(N'2010-10-10T00:00:00.000' AS DateTime), 5, CAST(N'2010-10-10T00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (5, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (6, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (7, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21T00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (8, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-03-05T12:46:55.000' AS DateTime), 5, CAST(N'2018-03-05T12:46:55.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (9, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-03-05T12:48:15.000' AS DateTime), 5, CAST(N'2018-03-05T12:48:15.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Mission] OFF
SET IDENTITY_INSERT [dbo].[MissionWorker] ON 

INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (6, 6, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (7, 1, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (8, 1, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (9, 7, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (10, 7, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (11, 8, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (12, 9, 4)
SET IDENTITY_INSERT [dbo].[MissionWorker] OFF
SET IDENTITY_INSERT [dbo].[Notification] ON 

INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (2, N'Chú Ý', N'Cảm ơn bạn đã chú ý đến chú ý này sự chú ý của bạn sẽ được chú ý', CAST(N'2018-02-28T00:00:00.000' AS DateTime), 2, CAST(N'2018-02-28T00:00:00.000' AS DateTime), 2, 2)
SET IDENTITY_INSERT [dbo].[Notification] OFF
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (1, N'Admin')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (2, N'Manager')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (3, N'Scheduler')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (4, N'Poster')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (5, N'Scheduler,Poster')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (6, N'User')
SET IDENTITY_INSERT [dbo].[Room] ON 

INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (1, N'aaa', 99, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (2, N'202', 15, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (3, N'create name', 25, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (4, N'aaa', 99, 1)
SET IDENTITY_INSERT [dbo].[Room] OFF
SET IDENTITY_INSERT [dbo].[Service] ON 

INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (1, N'test1', N'abc', 18, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (2, N'test2', N'abc', 19, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (3, N'test3', NULL, 19, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (4, N'test4', NULL, 19, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (5, N'test5', NULL, 20, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (6, N'test6', NULL, 21, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (7, N'test7', NULL, 22, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (8, N'test8', NULL, 23, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (9, N'test9', NULL, 23, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (10, N'test10', NULL, 24, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (11, N'test11', NULL, 25, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (12, N'test12', NULL, 26, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (13, N'test13', NULL, 18, 2)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (14, N'test14', NULL, 18, 0)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (15, N'test15', NULL, 18, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (16, N'abc', N'wer', 10, 2)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (17, N'abc', N'wer', 10, 2)
SET IDENTITY_INSERT [dbo].[Service] OFF
SET IDENTITY_INSERT [dbo].[Shift] ON 

INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1, 1, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 1, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (2, 2, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 1, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (3, 3, CAST(N'08:00:00' AS Time), CAST(N'12:00:00' AS Time), 1, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (4, 4, CAST(N'12:00:00' AS Time), CAST(N'16:00:00' AS Time), 1, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (6, 5, CAST(N'16:00:00' AS Time), CAST(N'20:00:00' AS Time), 1, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (7, 6, CAST(N'20:00:00' AS Time), CAST(N'00:00:00' AS Time), 1, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (8, 1, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 5, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (9, 2, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 5, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (10, 3, CAST(N'08:00:00' AS Time), CAST(N'12:00:00' AS Time), 5, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (11, 4, CAST(N'12:00:00' AS Time), CAST(N'16:00:00' AS Time), 5, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (12, 5, CAST(N'16:00:00' AS Time), CAST(N'20:00:00' AS Time), 5, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (13, 6, CAST(N'20:00:00' AS Time), CAST(N'00:00:00' AS Time), 5, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (14, 1, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 6, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (15, 2, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 6, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (16, 3, CAST(N'08:00:00' AS Time), CAST(N'12:00:00' AS Time), 6, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (17, 4, CAST(N'12:00:00' AS Time), CAST(N'16:00:00' AS Time), 6, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (18, 5, CAST(N'16:00:00' AS Time), CAST(N'20:00:00' AS Time), 6, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (19, 6, CAST(N'20:00:00' AS Time), CAST(N'00:00:00' AS Time), 6, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (20, 1, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 7, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (21, 2, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 7, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (22, 3, CAST(N'08:00:00' AS Time), CAST(N'12:00:00' AS Time), 7, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (23, 4, CAST(N'12:00:00' AS Time), CAST(N'16:00:00' AS Time), 7, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (24, 5, CAST(N'16:00:00' AS Time), CAST(N'20:00:00' AS Time), 7, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (25, 6, CAST(N'20:00:00' AS Time), CAST(N'00:00:00' AS Time), 7, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (26, 1, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 8, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (27, 2, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 8, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (28, 3, CAST(N'08:00:00' AS Time), CAST(N'12:00:00' AS Time), 8, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (29, 4, CAST(N'12:00:00' AS Time), CAST(N'16:00:00' AS Time), 8, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (30, 5, CAST(N'16:00:00' AS Time), CAST(N'20:00:00' AS Time), 8, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (31, 6, CAST(N'20:00:00' AS Time), CAST(N'00:00:00' AS Time), 8, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (32, 1, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 9, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (33, 2, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 9, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (34, 3, CAST(N'08:00:00' AS Time), CAST(N'12:00:00' AS Time), 9, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (35, 4, CAST(N'12:00:00' AS Time), CAST(N'16:00:00' AS Time), 9, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (36, 5, CAST(N'16:00:00' AS Time), CAST(N'20:00:00' AS Time), 9, NULL)
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (37, 6, CAST(N'20:00:00' AS Time), CAST(N'00:00:00' AS Time), 7, NULL)
SET IDENTITY_INSERT [dbo].[Shift] OFF
SET IDENTITY_INSERT [dbo].[ShiftDay] ON 

INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (1, CAST(N'2018-02-26' AS Date), N'1', 1)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (5, CAST(N'2018-02-27' AS Date), N'2', 1)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (6, CAST(N'2018-02-28' AS Date), N'3', 1)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (7, CAST(N'2018-03-01' AS Date), N'4', 1)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (8, CAST(N'2018-03-02' AS Date), N'5', 1)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (9, CAST(N'2018-03-03' AS Date), N'6', 1)
SET IDENTITY_INSERT [dbo].[ShiftDay] OFF
SET IDENTITY_INSERT [dbo].[ShiftSchedule] ON 

INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [StartDate], [EndDate], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby]) VALUES (1, 1, CAST(N'2018-02-25' AS Date), CAST(N'2018-03-03' AS Date), 1, 1, CAST(N'2018-02-20T00:00:00.000' AS DateTime), CAST(N'2018-02-20T00:00:00.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[ShiftSchedule] OFF
SET IDENTITY_INSERT [dbo].[ShiftWorker] ON 

INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1, 1, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (2, 1, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (3, 2, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (4, 2, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (5, 3, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (6, 3, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (8, 4, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (10, 4, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (18, 6, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (19, 6, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (20, 7, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (21, 7, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (22, 8, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (23, 8, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (24, 9, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (25, 9, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (26, 10, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (27, 10, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (28, 11, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (29, 11, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (30, 12, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (31, 12, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (32, 13, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (33, 13, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (34, 14, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (35, 14, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (36, 15, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (37, 15, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (38, 16, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (39, 16, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (40, 17, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (41, 17, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (42, 18, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (43, 18, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (44, 19, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (45, 19, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (46, 20, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (47, 20, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (48, 21, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (49, 21, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (50, 22, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (51, 22, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (52, 23, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (53, 23, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (54, 24, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (55, 24, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (56, 25, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (57, 25, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (58, 26, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (59, 26, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (60, 27, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (61, 27, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (62, 28, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (63, 28, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (64, 29, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (65, 29, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (66, 30, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (67, 30, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (68, 31, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (69, 31, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (70, 32, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (71, 32, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (72, 33, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (73, 33, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (74, 34, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (75, 34, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (76, 35, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (77, 35, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (78, 36, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (79, 36, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (80, 37, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (81, 37, 7)
SET IDENTITY_INSERT [dbo].[ShiftWorker] OFF
SET IDENTITY_INSERT [dbo].[Specialist] ON 

INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10000, N'Khoa da liễu', NULL, CAST(N'2018-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10001, N'Khoa hô hấp', NULL, CAST(N'2018-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10002, N'Khoa mắt', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10003, N'Khoa nha', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10004, N'Khoa sản', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10005, N'Khoa tổng quát', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10006, N'Khoa tim mạch', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10007, N'Khoa tiêu hóa', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Specialist] ([SpecialistId], [SpecialistName], [Description], [CreateDate], [UpdateDate]) VALUES (10008, N'Khoa tai mũi họng', NULL, CAST(N'2017-03-17T00:00:00.000' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[Specialist] OFF
SET IDENTITY_INSERT [dbo].[Time] ON 

INSERT [dbo].[Time] ([TimeId], [Date], [Time], [Amount], [Available]) VALUES (20000, CAST(N'2018-04-04' AS Date), N'6h:00-8h:00', 0, 0)
INSERT [dbo].[Time] ([TimeId], [Date], [Time], [Amount], [Available]) VALUES (20001, CAST(N'2018-04-04' AS Date), N'8h:00-10h:00', 95, 1)
INSERT [dbo].[Time] ([TimeId], [Date], [Time], [Amount], [Available]) VALUES (20002, CAST(N'2018-05-05' AS Date), N'6h:00-8h:00', 100, 1)
INSERT [dbo].[Time] ([TimeId], [Date], [Time], [Amount], [Available]) VALUES (20003, CAST(N'2018-05-05' AS Date), N'8h:00-10h:00', 0, 0)
INSERT [dbo].[Time] ([TimeId], [Date], [Time], [Amount], [Available]) VALUES (20004, CAST(N'2018-05-05' AS Date), N'10h:00-12h:00', 100, 1)
INSERT [dbo].[Time] ([TimeId], [Date], [Time], [Amount], [Available]) VALUES (20005, CAST(N'2018-05-05' AS Date), N'13h:30-15h:30', 100, 1)
SET IDENTITY_INSERT [dbo].[Time] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (1, N'admin', N'123', NULL, N'Longhhse61761@fpt.edu.vn', N'Hồ Hoàng Long', 1, CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (2, N'q', N'123', N'/q', N'q@gmail.com', N'Pham Xuan Tung', 1, CAST(N'1996-01-01' AS Date), 1, N'0123456789', N'Nurse', N'123/4 a street', N'University degree', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (3, N'w', N'123', N'/w', N'w@gmail.com', N'Tung', 1, CAST(N'1996-01-01' AS Date), 1, N'0123456789', N'Doctor', N'123/5 a street', N'University degree', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (4, N'e', N'123', N'/e', N'e@gmail.com', N'eee', 1, CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Nurse', N'123/4 a street', N'University degree', 2, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (5, N'r', N'123', N'/q', N'r@gmail.com', N'TungPham', 1, CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Doctor', N'123/4 a street', N'University degree', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (6, N't', N'123', N'/t', N't@gmail.com', N'eee', 1, CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Nurse', N'123/4 a street', N'University degree', 1, 5)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (7, N'y', N'123', N'/y', N'y@gmail.com', N'rrr', 1, CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Doctor', N'123/4 a street', N'University degree', 1, 5)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (8, N'test', N'password', N'avatar', N'Email', N'Fullname', 1, CAST(N'1996-05-05' AS Date), 1, N'phone', N'Position', N'address', N'Certificate', 2, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (9, N'Long123', N'123', N'null', N'Longhhse61761@fpt.edu.vn', N'post', 1, CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (10, N'Long123', N'123', N'Avatar', N'Email', N'FullName', 1, CAST(N'1996-01-01' AS Date), 1, N'1234567890', N'Position', N'Address', N'Certificate', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (11, N'Long123', N'123', N'null', N'Longhhse61761@fpt.edu.vn', N'post', 1, CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (12, N'Long123', N'123', N'new avatar', N'Longhhse61761@fpt.edu.vn', N'post', 1, CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (13, N'new', N'null', N'null', N'new@gmail.com', N'H? Hoàng Long', 1, CAST(N'1996-05-05' AS Date), 1, N'1111111111111111', N'Doctor', N'123 /4 abc Street', N'FPT', 2, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (14, N'abc', N'123', N'null', N'abc@gmail', N'H? Hoàng Long', 1, CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 2, 1)
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[Article]  WITH CHECK ADD  CONSTRAINT [FK_Article_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([CategoryId])
GO
ALTER TABLE [dbo].[Article] CHECK CONSTRAINT [FK_Article_Category]
GO
ALTER TABLE [dbo].[Article]  WITH CHECK ADD  CONSTRAINT [FK_Article_User] FOREIGN KEY([UploadBy])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Article] CHECK CONSTRAINT [FK_Article_User]
GO
ALTER TABLE [dbo].[Article]  WITH CHECK ADD  CONSTRAINT [FK_Article_User1] FOREIGN KEY([UpdateBy])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Article] CHECK CONSTRAINT [FK_Article_User1]
GO
ALTER TABLE [dbo].[Meeting]  WITH CHECK ADD  CONSTRAINT [FK_Meeting_Room] FOREIGN KEY([RoomId])
REFERENCES [dbo].[Room] ([RoomId])
GO
ALTER TABLE [dbo].[Meeting] CHECK CONSTRAINT [FK_Meeting_Room]
GO
ALTER TABLE [dbo].[Meeting]  WITH CHECK ADD  CONSTRAINT [FK_Meeting_User1] FOREIGN KEY([CreateBy])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Meeting] CHECK CONSTRAINT [FK_Meeting_User1]
GO
ALTER TABLE [dbo].[Meeting]  WITH CHECK ADD  CONSTRAINT [FK_Meeting_User2] FOREIGN KEY([UpdateBy])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Meeting] CHECK CONSTRAINT [FK_Meeting_User2]
GO
ALTER TABLE [dbo].[Mission]  WITH CHECK ADD  CONSTRAINT [FK_Mission_User1] FOREIGN KEY([Createby])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Mission] CHECK CONSTRAINT [FK_Mission_User1]
GO
ALTER TABLE [dbo].[Mission]  WITH CHECK ADD  CONSTRAINT [FK_Mission_User2] FOREIGN KEY([Updateby])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Mission] CHECK CONSTRAINT [FK_Mission_User2]
GO
ALTER TABLE [dbo].[MissionWorker]  WITH CHECK ADD  CONSTRAINT [FK_MissionWorker_Mission] FOREIGN KEY([MissionId])
REFERENCES [dbo].[Mission] ([MissionId])
GO
ALTER TABLE [dbo].[MissionWorker] CHECK CONSTRAINT [FK_MissionWorker_Mission]
GO
ALTER TABLE [dbo].[MissionWorker]  WITH CHECK ADD  CONSTRAINT [FK_MissionWorker_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[MissionWorker] CHECK CONSTRAINT [FK_MissionWorker_User]
GO
ALTER TABLE [dbo].[Notification]  WITH CHECK ADD  CONSTRAINT [FK_Notification_User] FOREIGN KEY([CreateBy])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Notification] CHECK CONSTRAINT [FK_Notification_User]
GO
ALTER TABLE [dbo].[Notification]  WITH CHECK ADD  CONSTRAINT [FK_Notification_User1] FOREIGN KEY([UpdateBy])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Notification] CHECK CONSTRAINT [FK_Notification_User1]
GO
ALTER TABLE [dbo].[Shift]  WITH CHECK ADD  CONSTRAINT [FK_Shift_ShiftDay] FOREIGN KEY([ShiftDayID])
REFERENCES [dbo].[ShiftDay] ([ShiftDayID])
GO
ALTER TABLE [dbo].[Shift] CHECK CONSTRAINT [FK_Shift_ShiftDay]
GO
ALTER TABLE [dbo].[ShiftDay]  WITH CHECK ADD  CONSTRAINT [FK_ShiftDay_ShiftSchedule] FOREIGN KEY([ShiftScheduleId])
REFERENCES [dbo].[ShiftSchedule] ([ShiftScheduleId])
GO
ALTER TABLE [dbo].[ShiftDay] CHECK CONSTRAINT [FK_ShiftDay_ShiftSchedule]
GO
ALTER TABLE [dbo].[ShiftSchedule]  WITH CHECK ADD  CONSTRAINT [FK_ShiftSchedule_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([DepartmentId])
GO
ALTER TABLE [dbo].[ShiftSchedule] CHECK CONSTRAINT [FK_ShiftSchedule_Department]
GO
ALTER TABLE [dbo].[ShiftSchedule]  WITH CHECK ADD  CONSTRAINT [FK_ShiftSchedule_User] FOREIGN KEY([Createby])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[ShiftSchedule] CHECK CONSTRAINT [FK_ShiftSchedule_User]
GO
ALTER TABLE [dbo].[ShiftSchedule]  WITH CHECK ADD  CONSTRAINT [FK_ShiftSchedule_User1] FOREIGN KEY([Updateby])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[ShiftSchedule] CHECK CONSTRAINT [FK_ShiftSchedule_User1]
GO
ALTER TABLE [dbo].[ShiftWorker]  WITH CHECK ADD  CONSTRAINT [FK_ShiftWorker_Shift] FOREIGN KEY([ShiftId])
REFERENCES [dbo].[Shift] ([ShiftId])
GO
ALTER TABLE [dbo].[ShiftWorker] CHECK CONSTRAINT [FK_ShiftWorker_Shift]
GO
ALTER TABLE [dbo].[ShiftWorker]  WITH CHECK ADD  CONSTRAINT [FK_ShiftWorker_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[ShiftWorker] CHECK CONSTRAINT [FK_ShiftWorker_User]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([DepartmentId])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Department]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Role] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Role] ([RoleId])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Role]
GO
USE [master]
GO
ALTER DATABASE [Hospital_Portal_Commit] SET  READ_WRITE 
GO
