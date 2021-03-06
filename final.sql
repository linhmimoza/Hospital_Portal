USE [master]
GO
/****** Object:  Database [Hospital_Portal]    Script Date: 05-06-2018 8:11:22 PM ******/
CREATE DATABASE [Hospital_Portal]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Hospital_Postal', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Hospital_Postal.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Hospital_Postal_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Hospital_Postal_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Hospital_Portal] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Hospital_Portal].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Hospital_Portal] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Hospital_Portal] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Hospital_Portal] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Hospital_Portal] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Hospital_Portal] SET ARITHABORT OFF 
GO
ALTER DATABASE [Hospital_Portal] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Hospital_Portal] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Hospital_Portal] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Hospital_Portal] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Hospital_Portal] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Hospital_Portal] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Hospital_Portal] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Hospital_Portal] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Hospital_Portal] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Hospital_Portal] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Hospital_Portal] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Hospital_Portal] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Hospital_Portal] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Hospital_Portal] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Hospital_Portal] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Hospital_Portal] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Hospital_Portal] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Hospital_Portal] SET RECOVERY FULL 
GO
ALTER DATABASE [Hospital_Portal] SET  MULTI_USER 
GO
ALTER DATABASE [Hospital_Portal] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Hospital_Portal] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Hospital_Portal] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Hospital_Portal] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Hospital_Portal] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Hospital_Portal]
GO
/****** Object:  Table [dbo].[Article]    Script Date: 05-06-2018 8:11:22 PM ******/
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
	[Link] [nvarchar](50) NULL,
	[Describe] [nvarchar](100) NULL,
	[OldName] [nvarchar](500) NULL,
 CONSTRAINT [PK_Article] PRIMARY KEY CLUSTERED 
(
	[ArticleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Category]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[Department]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[DepartmentId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Status] [int] NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[MedicalBooking]    Script Date: 05-06-2018 8:11:22 PM ******/
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
	[GuestAddress] [nvarchar](50) NOT NULL,
	[Note] [nvarchar](50) NULL,
	[BookingNumber] [int] NULL,
	[IntendTime] [time](7) NULL,
 CONSTRAINT [PK_MedicalBooking] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Meeting]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Meeting](
	[MeetingId] [int] IDENTITY(1,1) NOT NULL,
	[RoomId] [int] NOT NULL,
	[MeetingName] [nvarchar](50) NOT NULL,
	[StartTime] [time](7) NOT NULL,
	[Duration] [time](7) NULL,
	[Date] [date] NOT NULL,
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
/****** Object:  Table [dbo].[Mission]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[MissionWorker]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[Notification]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[NotificationId] [int] IDENTITY(1,1) NOT NULL,
	[NotificationName] [nvarchar](max) NOT NULL,
	[Content] [nvarchar](max) NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[CreateBy] [int] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[UpdateBy] [int] NOT NULL,
	[Status] [int] NOT NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[NotificationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Role]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[Room]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[Service]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[Shift]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shift](
	[ShiftId] [int] IDENTITY(1,1) NOT NULL,
	[ShiftNO] [int] NULL,
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
/****** Object:  Table [dbo].[ShiftDay]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[ShiftSchedule]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftSchedule](
	[ShiftScheduleId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[Status] [int] NOT NULL,
	[Createby] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
	[Updateby] [int] NOT NULL,
	[Week] [nvarchar](10) NOT NULL,
 CONSTRAINT [PK_ShiftSchedule] PRIMARY KEY CLUSTERED 
(
	[ShiftScheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ShiftSchedulerManager]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftSchedulerManager](
	[Week] [nvarchar](10) NOT NULL,
	[DepartmentId] [int] NOT NULL,
	[Waiting] [int] NOT NULL,
	[Checked] [int] NULL,
 CONSTRAINT [PK_ShiftSchedulerManager] PRIMARY KEY CLUSTERED 
(
	[Week] ASC,
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ShiftWorker]    Script Date: 05-06-2018 8:11:22 PM ******/
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
/****** Object:  Table [dbo].[Time]    Script Date: 05-06-2018 8:11:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Time](
	[TimeId] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NOT NULL,
	[Amount] [int] NOT NULL,
	[Available] [int] NOT NULL,
	[Limit] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
 CONSTRAINT [PK_Time] PRIMARY KEY CLUSTERED 
(
	[TimeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[User]    Script Date: 05-06-2018 8:11:22 PM ******/
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
	[Sex] [nvarchar](50) NOT NULL,
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
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (1, N'Research paper', N'Research paper', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (2, N'Medical New', NULL, 1)
SET IDENTITY_INSERT [dbo].[Category] OFF
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (1, N'BOARD OF DIRECTOR', N'A board of directors is a recognized group of people who jointly oversee the activities of an organization, which can be either a for-profit business, nonprofit organization, or a government agency.', 1, N'D0')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (2, N'GENERAL PLANNING DEPARTMENT', N'A general plan is a broad planning guideline to a city''s or county''s future development goals and provides policy statements to achieve those development goals.', 1, N'D1')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (3, N'NURSING DEPARTMENT ', N'The Department of Nursing, in accord with CCSU, believes that the primary goal of the nursing faculty is to empower the BSN student to attain the highest standards of professional achievement, public service, and personal development. ', 1, N'D2')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (4, N'PSYCHOLOGY DEPARTMEN', N'The Department of Psychology at Stanford University is devoted to training scientists who will work to advance theory and to create knowledge that helps us address real-world problems. Accomplishing this mission requires a broad range of perspectives and backgrounds.', 1, N'D3')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (5, N'OUTPATIENT DEPARTMENT', N'An outpatient department or outpatient clinic is the part of a hospital designed for the treatment of outpatients, people with health problems who visit the hospital for diagnosis or treatment, but do not at this time require a bed or to be admitted for overnight care.', 1, N'D4')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (6, N'DEPARTMENT OF CHILD HEALTHCARE', N'Children with Special Health Care Needs. The Children with Special Health Care Needs Program is in the Healthy Starts and Transitions unit in the Office of Healthy Communities at the Department of Health.', 1, N'D5')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (7, N'EMERGENCY DEPARTMENT', N'An emergency department (ED), also known as an accident & emergency department (A&E), emergency room (ER), emergency ward (EW) or casualty department, is a medical treatment facility specializing in emergency medicine, the acute care of patients who present without prior appointment', 1, N'D6')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (8, N'PEDIATRIC DEPARTMENT', N'Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents. The American Academy of Pediatrics recommends people be under pediatric care up to the age of 21. ', 1, N'P1')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (12, N'GENERAL SURGERY DEPARTMENT', N'General surgery is a surgical specialty that focuses on abdominal contents including esophagus, stomach, small bowel, colon, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland', 1, N'G1')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (13, N'ENT – EYE – ODONTOLOGY DEPARTMENT', N'The Department of Otolaryngology at New York Eye and Ear Infirmary of Mount Sinai provides a full range of services for all conditions of the ear, nose, throat, sinuses, head and neck. ', 1, N'E1')
SET IDENTITY_INSERT [dbo].[Department] OFF
SET IDENTITY_INSERT [dbo].[Meeting] ON 

INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (1, 1, N'Improve skill meeting', CAST(N'01:00:00' AS Time), CAST(N'02:00:00' AS Time), CAST(N'2018-05-01' AS Date), N'Improve skill meeting', N'Improve skill meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:47.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (2, 2, N'Capston meeting', CAST(N'01:00:00' AS Time), CAST(N'02:00:00' AS Time), CAST(N'2018-04-02' AS Date), N'Capston meeting', N'Capston meeting', 2, CAST(N'2018-04-01 23:47:21.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:29.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (3, 1, N'Weekly meeting', CAST(N'01:00:00' AS Time), CAST(N'03:00:00' AS Time), CAST(N'2018-04-13' AS Date), N'Weekly meeting', N'Weekly meeting', 2, CAST(N'2018-04-02 13:28:38.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:32.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (4, 1, N'Weekly Meeting', CAST(N'01:00:00' AS Time), CAST(N'02:00:00' AS Time), CAST(N'2018-04-21' AS Date), N'Weekly Meeting', N'Weekly meeting', 2, CAST(N'2018-04-03 17:22:34.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:35.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (5, 1, N'Weekly Meeting', CAST(N'07:00:00' AS Time), CAST(N'08:30:00' AS Time), CAST(N'2018-04-29' AS Date), N'Weekly Meeting', N'Weekly meeting', 2, CAST(N'2018-04-03 17:23:42.000' AS DateTime), 2, CAST(N'2018-04-03 17:24:46.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (6, 1, N'Weekly Meeting', CAST(N'06:00:00' AS Time), CAST(N'08:00:00' AS Time), CAST(N'2018-04-29' AS Date), N'Weekly Meeting', N'Weekly meeting', 2, CAST(N'2018-04-03 17:26:00.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:37.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (7, 2, N'Meeting', CAST(N'06:00:00' AS Time), CAST(N'08:30:00' AS Time), CAST(N'2018-04-26' AS Date), N'Meeting', N'Meeting', 2, CAST(N'2018-04-23 07:50:15.000' AS DateTime), 2, CAST(N'2018-04-26 22:54:49.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (8, 10, N'Daily meeting', CAST(N'01:30:00' AS Time), CAST(N'02:20:00' AS Time), CAST(N'2018-05-05' AS Date), N'Daily meeting', N'Daily meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-06-05 20:04:04.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (9, 5, N'Daily meeting', CAST(N'02:30:00' AS Time), CAST(N'03:30:00' AS Time), CAST(N'2018-05-05' AS Date), N'Daily meeting', N'Daily meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:25.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (10, 5, N'Board meeting', CAST(N'02:30:00' AS Time), CAST(N'03:30:00' AS Time), CAST(N'2018-05-05' AS Date), N'Board meeting', N'Board meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-06-05 20:03:23.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (11, 5, N'Investigative meeting', CAST(N'02:30:00' AS Time), CAST(N'03:30:00' AS Time), CAST(N'2018-05-05' AS Date), N'Investigative meeting', N'Investigative meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:27.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (12, 2, N'Interview ', CAST(N'08:30:00' AS Time), CAST(N'09:30:00' AS Time), CAST(N'2018-05-05' AS Date), N'Interview ', N'You should carry pen and notebook', 2, CAST(N'2018-04-27 00:00:00.000' AS DateTime), 2, CAST(N'2018-04-27 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (13, 4, N'Daily meeting', CAST(N'08:30:00' AS Time), CAST(N'09:30:00' AS Time), CAST(N'2018-05-05' AS Date), N'Daily meeting', N'Daily meeting', 2, CAST(N'2018-04-28 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:41.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (14, 5, N'Investigative meeting', CAST(N'02:30:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'2018-05-10' AS Date), N'Investigative meeting', N'Investigative meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:14:19.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (15, 5, N'Committee meeting', CAST(N'04:30:00' AS Time), CAST(N'05:30:00' AS Time), CAST(N'2018-05-10' AS Date), N'Committee meeting', N'Committee meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:15:33.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (16, 5, N'Committee meeting', CAST(N'02:30:00' AS Time), CAST(N'05:30:00' AS Time), CAST(N'2018-05-20' AS Date), N'Committee meeting', N'Committee meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:16:06.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (17, 5, N'One-on-one meeting', CAST(N'02:30:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'2018-05-20' AS Date), N'One-on-one meeting', N'One-on-one meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:09.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (18, 5, N'One-on-one meeting', CAST(N'02:30:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'2018-05-20' AS Date), N'One-on-one meeting', N'One-on-one meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-04-01 23:43:18.000' AS DateTime), 1)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (19, 3, N'Staff meeting', CAST(N'02:30:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'2018-05-20' AS Date), N'Staff meeting', N'Staff meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:15.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (20, 4, N'Staff meeting', CAST(N'02:30:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'2018-05-20' AS Date), N'Staff meeting', N'Staff meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:20.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (21, 4, N'Team meeting', CAST(N'02:30:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'2018-05-25' AS Date), N'Team meeting', N'Team meeting', 2, CAST(N'2018-03-30 02:02:42.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:23.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (22, 8, N'Improve skill', CAST(N'17:00:00' AS Time), CAST(N'18:00:00' AS Time), CAST(N'2018-05-17' AS Date), N'Improve skill', N'NA', 2, CAST(N'2018-05-03 08:57:49.000' AS DateTime), 2, CAST(N'2018-05-20 13:12:43.000' AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[Meeting] OFF
SET IDENTITY_INSERT [dbo].[Mission] ON 

INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (1, CAST(N'2018-05-14' AS Date), CAST(N'2018-05-18' AS Date), N'Ha Noi', N'Improve skill meeting', N'Improve skill meeting', 3, 2, CAST(N'2018-03-30 02:04:05.000' AS DateTime), 2, CAST(N'2018-05-30 22:44:52.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (2, CAST(N'2018-07-21' AS Date), CAST(N'2018-07-23' AS Date), N'Ha Noi', N'Improve skill meeting', N'Improve skill meeting', 2, 2, CAST(N'2018-04-02 13:31:15.000' AS DateTime), 2, CAST(N'2018-06-05 20:07:38.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (3, CAST(N'2018-05-01' AS Date), CAST(N'2018-05-07' AS Date), N'Campuchia', N'Staff meeting', N'Staff meeting', 3, 2, CAST(N'2018-04-03 16:34:32.000' AS DateTime), 2, CAST(N'2018-05-20 17:34:56.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (4, CAST(N'2018-05-01' AS Date), CAST(N'2018-05-05' AS Date), N'NewYork', N'Staff meeting', N'Staff meeting', 2, 4, CAST(N'2018-04-09 13:51:01.000' AS DateTime), 4, CAST(N'2018-05-30 22:45:04.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (5, CAST(N'2018-05-15' AS Date), CAST(N'2018-05-20' AS Date), N'HCM', N'Staff meeting', N'Staff meeting', 2, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-06-05 20:01:43.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (6, CAST(N'2018-05-16' AS Date), CAST(N'2018-05-24' AS Date), N'HCM', N'Improve skill meeting', N'Improve skill meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-06-05 20:01:55.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (7, CAST(N'2018-05-17' AS Date), CAST(N'2018-05-24' AS Date), N'Vinh Long', N'Committee meeting', N'Committee meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:53:04.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (8, CAST(N'2018-05-18' AS Date), CAST(N'2018-05-24' AS Date), N'Da Lat', N'Committee meeting', N'Committee meeting', 3, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-06-05 20:00:55.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (9, CAST(N'2018-05-20' AS Date), CAST(N'2018-05-24' AS Date), N'Lam Dong', N'Committee meeting', N'Committee meeting', 2, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-05-30 22:48:09.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (10, CAST(N'2018-05-20' AS Date), CAST(N'2018-05-24' AS Date), N'Hai Duong', N'Interview', N'Interview ', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-05-20 17:39:35.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (11, CAST(N'2018-05-21' AS Date), CAST(N'2018-05-26' AS Date), N'Ha noi', N'Interview', N'Interview ', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:53:36.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (12, CAST(N'2018-05-22' AS Date), CAST(N'2018-05-26' AS Date), N'HCM', N'Interview', N'Interview ', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:53:44.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (13, CAST(N'2018-05-23' AS Date), CAST(N'2018-05-26' AS Date), N'Tra Vinh', N'Interview', N'Interview ', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:53:51.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (14, CAST(N'2018-05-24' AS Date), CAST(N'2018-05-26' AS Date), N'Long An', N'Investigative meeting', N'Investigative meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:52:45.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (15, CAST(N'2018-05-25' AS Date), CAST(N'2018-05-26' AS Date), N'Mong Cai', N'Investigative meeting', N'Investigative meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-05-03 01:30:24.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (16, CAST(N'2018-05-26' AS Date), CAST(N'2018-05-31' AS Date), N'L.A', N'Investigative meeting', N'Investigative meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:53:59.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (17, CAST(N'2018-05-27' AS Date), CAST(N'2018-05-13' AS Date), N'Moscow', N'Investigative meeting', N'Investigative meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-05-03 01:30:35.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (18, CAST(N'2018-05-28' AS Date), CAST(N'2018-05-31' AS Date), N'Paris', N'Investigative meeting', N'Investigative meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-05-03 01:30:46.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (19, CAST(N'2018-05-29' AS Date), CAST(N'2018-05-31' AS Date), N'Chicago', N'Investigative meeting', N'Investigative meeting', 1, 2, CAST(N'2018-04-23 07:46:52.000' AS DateTime), 2, CAST(N'2018-04-27 00:54:09.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (20, CAST(N'2018-05-02' AS Date), CAST(N'2018-05-05' AS Date), N'Tokyo', N'Asian medical meeting', N'NA', 1, 2, CAST(N'2018-05-03 08:51:33.000' AS DateTime), 2, CAST(N'2018-05-03 08:53:05.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (21, CAST(N'2018-05-05' AS Date), CAST(N'2018-05-10' AS Date), N'Tokyo', N'Medical meeting', N'NA', 1, 2, CAST(N'2018-05-03 13:18:00.000' AS DateTime), 2, CAST(N'2018-05-03 13:18:10.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (22, CAST(N'2018-05-05' AS Date), CAST(N'2018-05-16' AS Date), N'USA', N'aaa', N'null', 3, 2, CAST(N'2018-05-03 13:19:14.000' AS DateTime), 2, CAST(N'2018-05-10 00:39:34.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Mission] OFF
SET IDENTITY_INSERT [dbo].[MissionWorker] ON 

INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (69, 14, 3)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (70, 14, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (71, 14, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (77, 7, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (78, 7, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (79, 7, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (80, 7, 8)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (93, 11, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (94, 11, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (95, 11, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (96, 11, 12)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (97, 12, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (98, 12, 8)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (99, 12, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (100, 12, 12)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (101, 12, 11)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (102, 13, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (103, 13, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (104, 13, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (105, 16, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (106, 16, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (107, 16, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (108, 19, 8)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (109, 19, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (110, 19, 12)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (111, 19, 11)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (112, 15, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (113, 15, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (114, 15, 15)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (115, 17, 40)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (116, 17, 41)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (117, 17, 37)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (118, 18, 8)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (119, 18, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (120, 18, 24)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (123, 20, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (124, 20, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (131, 21, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (132, 21, 13)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1161, 22, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1162, 22, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1163, 22, 13)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1181, 3, 7)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1182, 3, 8)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1183, 3, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1203, 10, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1204, 10, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1205, 10, 11)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1211, 1, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1214, 4, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1215, 4, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1228, 9, 3)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1229, 9, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1240, 8, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1241, 8, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1242, 8, 11)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1243, 8, 12)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1247, 5, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1248, 6, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1249, 6, 8)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1250, 6, 9)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1251, 6, 6)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1254, 2, 2)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (1255, 2, 4)
SET IDENTITY_INSERT [dbo].[MissionWorker] OFF
SET IDENTITY_INSERT [dbo].[Notification] ON 

INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (1, N'Emergency Notification', N'<p>&nbsp;</p>
<p class="MsoNormal"><strong>Emergency Notification Alerts Staff of Critical Events</strong></p>
<p class="MsoNormal">There are many situations when you urgently need to alert a group of people of information. This can include dangerous weather, a security situation they should be aware of, or perhaps it&rsquo;s an influx of patients. Your staff depends on fast, accurate notification of critical information on the right communications device to prepare them and to ensure their safety in the event of an emergency.</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><strong>Emergency Notification and Incident Management</strong></p>
<p class="MsoNormal">Spok helps you quickly and reliably notify staff during emergency situations without calling trees and confusion. Automatically deliver messages, collect responses, escalate to others, and log all activities for reporting and analysis.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-03 00:01:42.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (2, N'Critical Test Results', N'<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Improving Care Coordination by Sharing Test Results Quickly and Effectively </strong></p>
<p class="MsoNormal">Many institutions currently use a manual procedure to communicate and log critical test results management (CTRM) process steps. Automating this process with Spok&reg;<span style="mso-spacerun: yes;">&nbsp; </span>Critical Test Results Management can significantly reduce costs and save valuable time while improving patient care and reducing litigation costs. This unique product securely and rapidly transfers information to the right caregivers when time is critical to patient care.</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Closed-Loop Communications for Joint Commission and Lab CAP Accreditation</strong></p>
<p class="MsoNormal">Spok Critical Test Results Management includes automatic message delivery confirmation, an event log and audit trail, and is compatible with existing hospital technology systems. It includes a closed-loop communication feature that allows the receiving caregiver to confirm that he/she has received and understood the critical alert. There is also a configurable escalation feature that alerts others when the initial caregiver doesn&rsquo;t react to a critical alert in a timely manner.</p>', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-03 00:35:05.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (3, N'Deliver Results to the Right Physician', N'<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Deliver Results to the Right Physician</strong></p>
<p class="MsoNormal">Because Spok technology is built for the entire healthcare organization, our many integrations and data sources help ensure that the appropriate people receive the messages they need day or night. This means critical results can be delivered to the right on-call physician who can then begin treatment for the patient.</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Integrating With the Spok Suite of Communication Workflow Solutions</strong></p>
<p class="MsoNormal">Spok Critical Test Results Management integrates with Spok Mobile&reg; for encrypted smartphone communications. This supports secure, traceable communications and message delivery confirmations. Spok Critical Test Results Management integrates with the Spok directory and on-call scheduling solutions. This provides a centralized view of this critical information and eliminates data duplication.</p>', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-03 00:46:03.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (4, N'Improving Patient Satisfaction', N'<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Improving Patient Satisfaction and Nurse Efficiency with Mobile Alerts from Nurse Call Systems</strong></p>
<p class="MsoNormal">Providing patients the ability to communicate with their assigned nurse within seconds of hitting the nurse call button offers a less stressful environment for the patient. In fact, patient satisfaction scores often hinge on communications with assigned nurses.</p>
<p class="MsoNormal" style="tab-stops: 56.25pt;">On the flip side, nurses typically juggle too many patients and tasks. RNs often perform duties an orderly or supply technician could do. Communication technology is needed to make nurses&rsquo; shifts flow more smoothly and eliminate excess walking and redundant effort.</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Spok Nurse Call Integration Solutions</strong></p>
<p class="MsoNormal">With Spok&reg; Messenger, you can deliver nurse call alerts directly to the appropriate nurse on his or her mobile device, enabling the nurse to respond quickly to the patient need or request. You can also direct requests for water, general information, or bathroom assistance to non-clinical staff as appropriate. Leveraging today&rsquo;s variety of mobile devices helps nurses spend more time on direct patient care.</p>', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-03 00:47:32.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (5, N'Patient Monitoring', N'<p class="MsoNormal"><strong>Fast Response to Alerts Saves Lives</strong></p>
<p class="MsoNormal">Enhance the value of patient monitoring by sending system-generated alarm notifications directly to nurses to ensure critical patient conditions are triaged quickly.</p>
<p class="MsoNormal">Spok Alarm Surveillance powered by Bernoulli captures live streaming patient data from patient monitoring systems to create unique smart alarms by taking into consideration various key measurements. These smart alarms suppress nuisance and alarms that aren&rsquo;t clinically actionable and only deliver actionable alarms directly to the right clinician, resulting in fewer interruptions to the care team.</p>', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-03 00:53:00.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (6, N'Committee meeting', N'content', CAST(N'2018-03-30 01:42:01.000' AS DateTime), 2, CAST(N'2018-03-30 01:42:01.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (7, N'Staff meeting', N'<p style="text-align: center;"><span style="text-decoration: underline;"><a href="https://www.facebook.com/">face</a>qweqw<em>qweqweqdqwd</em></span></p>
<p style="text-align: left;">wwwwwwwwwwww</p>
<p style="text-align: right;"><strong>eeeeeeeeeee</strong></p>', CAST(N'2018-04-21 16:43:28.000' AS DateTime), 2, CAST(N'2018-04-26 15:57:38.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (8, N'EHR Interoperability', N'<p class="MsoNormal"><strong style="mso-bidi-font-weight: normal;">Maximize the Return on Your EHR System Investment</strong></p>
<p class="MsoNormal">Hospitals and health systems have spent upwards of $1 billion in electronic health record (EHR) systems. We&rsquo;ve entered the era of EHR optimization: Now that your EHR is fully implemented, how can you maximize your investment?</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal">EHRs contain a wealth of information. However, they were designed to be systems of record rather than systems of communication. Spok can use the information in electronic patient records to make alerts and messages more actionable. Adding detailed clinical information to a patient event with data from the EHR, noting a patient&rsquo;s medication allergies for example, helps drive faster, more efficient decision-making for providers.</p>
<p class="MsoNormal">&nbsp;</p>
<p class="MsoNormal">Spok Care Connect integrates with all major EHR vendors, including Epic&reg;, Cerner&reg;, and MEDITECH&reg;.</p>', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-05-03 00:53:47.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (9, N'Investigative meeting', N'Investigative meeting', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-04-26 15:53:45.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (10, N'Improve skill meeting', N'Improve skill meeting', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-04-26 15:53:45.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (11, N'Improve skill meeting', N'Improve skill meeting', CAST(N'2018-03-30 00:00:00.000' AS DateTime), 2, CAST(N'2018-04-26 15:53:45.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (12, N'Meeting', N'<p style="text-align: left;"><strong><em>This is new meeting</em></strong></p>', CAST(N'2018-05-03 09:03:59.000' AS DateTime), 2, CAST(N'2018-05-03 09:04:48.000' AS DateTime), 2, 1)
INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (13, N'mEETING', N'<p><strong>tHIS IS MEETING</strong></p>', CAST(N'2018-05-03 13:22:15.000' AS DateTime), 2, CAST(N'2018-05-03 13:22:15.000' AS DateTime), 2, 1)
SET IDENTITY_INSERT [dbo].[Notification] OFF
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (1, N'Admin')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (2, N'Manager')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (3, N'Scheduler')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (4, N'User')
INSERT [dbo].[Role] ([RoleId], [RoleName]) VALUES (5, N'Poster')
SET IDENTITY_INSERT [dbo].[Room] ON 

INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (1, N'Room201', 12, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (2, N'Room303', 10, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (3, N'Room202', 50, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (4, N'Room203', 100, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (5, N'Room301', 20, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (7, N'Room302', 40, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (8, N'Room401', 60, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (9, N'Room402', 50, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (10, N'Room403', 20, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (11, N'Room501', 15, 1)
INSERT [dbo].[Room] ([RoomId], [RoomName], [RoomSize], [Status]) VALUES (12, N'Room502', 20, 1)
SET IDENTITY_INSERT [dbo].[Room] OFF
SET IDENTITY_INSERT [dbo].[Service] ON 

INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (1, N'eye contest', N'eye contest', 13, 1)
INSERT [dbo].[Service] ([ServiceId], [ServiceName], [Description], [DepartmentId], [Status]) VALUES (2, N'D', N'D', 12, 1)
SET IDENTITY_INSERT [dbo].[Service] OFF
SET IDENTITY_INSERT [dbo].[Shift] ON 

INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1396, 0, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 26, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1397, 0, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 27, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1398, 0, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 28, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1399, 0, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 29, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1400, 0, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 30, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1401, 0, CAST(N'04:00:00' AS Time), CAST(N'08:00:00' AS Time), 31, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1402, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 39, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1403, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 40, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1404, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 41, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1405, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 42, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1406, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 43, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1407, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 44, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1408, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 45, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1409, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 46, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1410, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 47, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1411, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 48, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1412, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 49, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1413, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 50, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1414, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 51, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1415, 0, CAST(N'05:00:00' AS Time), CAST(N'10:00:00' AS Time), 52, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1416, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 53, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1417, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 54, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1418, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 55, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1419, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 56, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1420, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 57, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1421, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 58, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (1422, 0, CAST(N'02:00:00' AS Time), CAST(N'03:00:00' AS Time), 59, N'')
SET IDENTITY_INSERT [dbo].[Shift] OFF
SET IDENTITY_INSERT [dbo].[ShiftDay] ON 

INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (24, CAST(N'2018-05-05' AS Date), N'Sun', 32)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (26, CAST(N'2018-01-05' AS Date), N'Tue', 33)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (27, CAST(N'2018-02-05' AS Date), N'Wed', 33)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (28, CAST(N'2018-03-05' AS Date), N'Thu', 33)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (29, CAST(N'2018-04-05' AS Date), N'Fri', 33)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (30, CAST(N'2018-05-05' AS Date), N'Sat', 33)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (31, CAST(N'2018-06-05' AS Date), N'Sun', 33)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (39, CAST(N'2018-05-19' AS Date), N'Mon', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (40, CAST(N'2018-05-19' AS Date), N'Tue', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (41, CAST(N'2018-05-19' AS Date), N'Wed', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (42, CAST(N'2018-05-19' AS Date), N'Thu', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (43, CAST(N'2018-05-19' AS Date), N'Fri', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (44, CAST(N'2018-05-19' AS Date), N'Sat', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (45, CAST(N'2018-05-19' AS Date), N'Sun', 35)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (46, CAST(N'2018-05-13' AS Date), N'Mon', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (47, CAST(N'2018-05-14' AS Date), N'Tue', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (48, CAST(N'2018-05-15' AS Date), N'Wed', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (49, CAST(N'2018-05-16' AS Date), N'Thu', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (50, CAST(N'2018-05-17' AS Date), N'Fri', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (51, CAST(N'2018-05-18' AS Date), N'Sat', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (52, CAST(N'2018-05-19' AS Date), N'Sun', 36)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (53, CAST(N'2018-05-20' AS Date), N'Mon', 37)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (54, CAST(N'2018-05-21' AS Date), N'Tue', 37)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (55, CAST(N'2018-05-22' AS Date), N'Wed', 37)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (56, CAST(N'2018-05-23' AS Date), N'Thu', 37)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (57, CAST(N'2018-05-24' AS Date), N'Fri', 37)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (58, CAST(N'2018-05-25' AS Date), N'Sat', 37)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (59, CAST(N'2018-05-26' AS Date), N'Sun', 37)
SET IDENTITY_INSERT [dbo].[ShiftDay] OFF
SET IDENTITY_INSERT [dbo].[ShiftSchedule] ON 

INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (30, 13, 2, 2, CAST(N'2018-05-16 16:38:41.000' AS DateTime), CAST(N'2018-05-16 16:38:41.000' AS DateTime), 2, N'2018-W20')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (31, 1, 1, 2, CAST(N'2018-05-16 16:39:38.000' AS DateTime), CAST(N'2018-05-16 16:39:38.000' AS DateTime), 2, N'2018-W20')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (32, 1, 1, 2, CAST(N'2018-05-16 16:43:06.000' AS DateTime), CAST(N'2018-05-16 16:43:06.000' AS DateTime), 2, N'2018-W20')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (33, 1, 2, 2, CAST(N'2018-05-16 16:51:48.000' AS DateTime), CAST(N'2018-05-16 16:51:48.000' AS DateTime), 2, N'2018-W18')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (34, 1, 1, 2, CAST(N'2018-05-16 16:53:54.000' AS DateTime), CAST(N'2018-05-16 16:53:54.000' AS DateTime), 2, N'2018-W21')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (35, 1, 1, 2, CAST(N'2018-05-16 16:59:27.000' AS DateTime), CAST(N'2018-05-16 16:59:27.000' AS DateTime), 2, N'2018-W20')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (36, 1, 2, 2, CAST(N'2018-05-16 17:26:57.000' AS DateTime), CAST(N'2018-05-16 17:26:57.000' AS DateTime), 2, N'2018-W20')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (37, 1, 2, 2, CAST(N'2018-05-16 17:28:12.000' AS DateTime), CAST(N'2018-05-16 17:28:12.000' AS DateTime), 2, N'2018-W21')
SET IDENTITY_INSERT [dbo].[ShiftSchedule] OFF
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W18', 1, 33, 33)
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W20', 1, 36, 36)
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W20', 13, 30, 30)
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W21', 1, 37, 37)
SET IDENTITY_INSERT [dbo].[ShiftWorker] ON 

INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1755, 1396, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1756, 1396, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1757, 1397, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1758, 1397, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1759, 1398, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1760, 1398, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1761, 1399, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1762, 1399, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1763, 1400, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1764, 1400, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1765, 1401, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1766, 1401, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1767, 1402, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1768, 1402, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1769, 1403, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1770, 1403, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1771, 1404, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1772, 1404, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1773, 1405, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1774, 1405, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1775, 1406, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1776, 1406, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1777, 1407, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1778, 1407, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1779, 1408, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1780, 1408, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1781, 1409, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1782, 1409, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1783, 1410, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1784, 1410, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1785, 1411, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1786, 1411, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1787, 1412, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1788, 1412, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1789, 1413, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1790, 1413, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1791, 1414, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1792, 1414, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1793, 1415, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1794, 1415, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1795, 1416, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1796, 1416, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1797, 1417, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1798, 1417, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1799, 1418, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1800, 1418, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1801, 1419, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1802, 1419, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1803, 1420, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1804, 1420, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1805, 1421, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1806, 1421, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1807, 1422, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (1808, 1422, 4)
SET IDENTITY_INSERT [dbo].[ShiftWorker] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (1, N'Admin', N'123', NULL, N'admin@gmail.com', N'Admin', N'Male', CAST(N'1990-01-01' AS Date), 1, N'01212322412', N'Doctor', NULL, NULL, 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (2, N'Manager', N'123', N'null', N'manager@gmail.com', N'Manager', N'Male', CAST(N'2018-01-01' AS Date), 1, N'01212322412', N'Doctor', N'123/4 abc street xyz city', N'non', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (3, N'LongHH', N'123', N'null', N'hoanglong0505@gmail.com', N'Ho Hoang Long', N'Male', CAST(N'1996-05-05' AS Date), 1, N'01212322412', N'Doctor', N'qwe', N'qwe', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (4, N'Scheduler', N'123', N'null', N'scheduler@gmail.com', N'Scheduler', N'Female', CAST(N'1990-01-01' AS Date), 1, N'01212322412', N'Doctor', N'qwe', N'qw', 1, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (5, N'AnNV', N'123', N'null', N'An@gmail.com', N'Nguyen Van An', N'Male', CAST(N'1996-05-05' AS Date), 1, N'01212322412', N'Doctor', N'Nguyen Hue Street District 1', N'University of Medicine and Pharmacy HCM', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (6, N'BinhNV', N'123', N'null', N'Binh@gmail.com', N'Nguyen Van Binh', N'Male', CAST(N'1996-05-05' AS Date), 2, N'01212322412', N'Doctor', N'Nguyen Hue Street District 1', N'University of Medicine and Pharmacy HCM', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (7, N'ThanhNV', N'123', N'null', N'Thanh@gmail.com', N'Nguyen Van Thanh', N'Male', CAST(N'1996-05-05' AS Date), 2, N'01212322412', N'Doctor', N'Nguyen Hue Street District 1', N'University of Medicine and Pharmacy HCM', 2, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (8, N'CongNV', N'123', N'null', N'Cong@gmail.com', N'Nguyen Van Cong', N'Male', CAST(N'1996-05-05' AS Date), 2, N'01212322412', N'Doctor', N'Nguyen Hue Street District 1', N'University of Medicine and Pharmacy HCM', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (9, N'EmanuelKeller', N'123', N'null', N'EmanuelKeller@gmail.com', N'EmanuelKeller', N'Male', CAST(N'1990-12-12' AS Date), 2, N'01212322412', N'Doctor', N'Ho Chi Minh Viet Nam', N'HANOI MEDICAL UNIVERSITY', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (10, N'Antonio', N'123', N'null', N'AntonioSchneider@gmail.com', N'Antonio	Schneider', N'Male', CAST(N'1992-05-04' AS Date), 2, N'01212322412', N'Nurse', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (11, N'JeremyRoss', N'123', N'null', N'JeremyRoss@gmail.com', N'Jeremy Ross', N'Male', CAST(N'1990-12-12' AS Date), 3, N'01212322412', N'Doctor', N'Ho Chi Minh Viet Nam', N'HANOI MEDICAL UNIVERSITY', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (12, N'MaryannSoto', N'123', N'null', N'MaryannSoto@gmail.com', N'Maryann	Soto', N'Female', CAST(N'1992-05-04' AS Date), 3, N'01212322412', N'Other', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (13, N'JoanneCastro', N'123', N'null', N'JoanneCastro@gmail.com', N'JoanneCastro', N'Female', CAST(N'1992-05-04' AS Date), 3, N'01212322412', N'Nurse', N'NA', N'NA', 1, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (14, N'WandaWright', N'123', N'null', N'WandaWright@gmail.com', N'WandaWright', N'Female', CAST(N'1992-05-04' AS Date), 3, N'01212322412', N'Nurse', N'NA', N'NA', 1, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (15, N'HubertShelton', N'123', N'null', N'HubertShelton@gmail.com', N'HubertShelton', N'Female', CAST(N'1992-05-04' AS Date), 3, N'01212322412', N'Nurse', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (16, N'JordanSteele', N'123', N'null', N'JordanSteele@gmail.com', N'JordanSteele', N'Male', CAST(N'1992-05-04' AS Date), 4, N'01212322412', N'Other', N'NA', N'NA', 1, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (17, N'JackPadilla', N'123', N'null', N'JackPadilla@gmail.com', N'JackPadilla', N'Female', CAST(N'1992-05-04' AS Date), 4, N'01212322412', N'Nurse', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (18, N'MonaReyes', N'123', N'null', N'MonaReyes@gmail.com', N'MonaReyes', N'Female', CAST(N'1992-05-04' AS Date), 4, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (19, N'StaceyMurray', N'123', N'null', N'StaceyMurray@gmail.com', N'StaceyMurray', N'Female', CAST(N'1992-05-04' AS Date), 4, N'01212322412', N'Other', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (20, N'GordonBall', N'123', N'null', N'GordonBall@gmail.com', N'GordonBall', N'Female', CAST(N'1992-05-04' AS Date), 4, N'01212322412', N'Other', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (21, N'VanGuzman', N'123', N'null', N'VanGuzman@gmail.com', N'VanGuzman', N'Male', CAST(N'1992-05-04' AS Date), 5, N'01212322412', N'Nurse', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (22, N'FredrickGregory', N'123', N'null', N'FredrickGregory@gmail.com', N'FredrickGregory', N'Male', CAST(N'1992-05-04' AS Date), 5, N'01212322412', N'Other', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (23, N'JuliaRogers', N'123', N'null', N'JuliaRogers@gmail.com', N'JuliaRogers', N'Female', CAST(N'1992-05-04' AS Date), 5, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (24, N'KevinKelley', N'123', N'null', N'KevinKelley@gmail.com', N'KevinKelley', N'Female', CAST(N'1992-05-04' AS Date), 5, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (25, N'GregWade', N'123', N'null', N'GregWade@gmail.com', N'GregWade', N'Male', CAST(N'1992-05-04' AS Date), 5, N'01212322412', N'Nurse', N'NA', N'NA', 1, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (26, N'RosemaryHill', N'123', N'null', N'RosemaryHill@gmail.com', N'RosemaryHill', N'Female', CAST(N'1992-05-04' AS Date), 6, N'01212322412', N'Other', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (27, N'BillyWheeler', N'123', N'null', N'BillyWheeler@gmail.com', N'BillyWheeler', N'Female', CAST(N'1992-05-04' AS Date), 6, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (28, N'CraigGrant', N'123', N'null', N'CraigGrant@gmail.com', N'CraigGrant', N'Female', CAST(N'1992-05-04' AS Date), 6, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (29, N'ForrestKing', N'123', N'null', N'ForrestKing@gmail.com', N'ForrestKing', N'Female', CAST(N'1992-05-04' AS Date), 6, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (30, N'CarltonBryant', N'123', N'null', N'CarltonBryant@gmail.com', N'CarltonBryant', N'Female', CAST(N'1992-05-04' AS Date), 6, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (31, N'NoraRoy', N'123', N'null', N'NoraRoy@gmail.com', N'NoraRoy', N'Female', CAST(N'1992-05-04' AS Date), 7, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (32, N'DavePhelps', N'123', N'null', N'DavePhelps@gmail.com', N'DavePhelps', N'Female', CAST(N'1992-05-04' AS Date), 7, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (33, N'CharleneLewis', N'123', N'null', N'CharleneLewis@gmail.com', N'CharleneLewis', N'Female', CAST(N'1992-05-04' AS Date), 7, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (34, N'JudithStewart', N'123', N'null', N'JudithStewart@gmail.com', N'JudithStewart', N'Female', CAST(N'1992-05-04' AS Date), 7, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (35, N'ClaudeHowell', N'123', N'null', N'ClaudeHowell@gmail.com', N'ClaudeHowell', N'Female', CAST(N'1992-05-04' AS Date), 7, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (36, N'LelaMcdaniel', N'123', N'null', N'LelaMcdaniel@gmail.com', N'LelaMcdaniel', N'Female', CAST(N'1992-05-04' AS Date), 8, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (37, N'ChesterVega', N'123', N'null', N'ChesterVega@gmail.com', N'ChesterVega', N'Female', CAST(N'1992-05-04' AS Date), 8, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (38, N'CraigPayne', N'123', N'null', N'CraigPayne@gmail.com', N'CraigPayne', N'Female', CAST(N'1992-05-04' AS Date), 8, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (39, N'EleanorRoss', N'123', N'null', N'EleanorRoss@gmail.com', N'EleanorRoss', N'Female', CAST(N'1992-05-04' AS Date), 8, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (40, N'RickMendez', N'123', N'null', N'RickMendez@gmail.com', N'RickMendez', N'Female', CAST(N'1992-05-04' AS Date), 8, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (41, N'DonnaMurphy', N'123', N'null', N'DonnaMurphy@gmail.com', N'DonnaMurphy', N'Female', CAST(N'1992-05-04' AS Date), 12, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (42, N'BrittanyPalmer', N'123', N'null', N'BrittanyPalmer@gmail.com', N'BrittanyPalmer', N'Female', CAST(N'1992-05-04' AS Date), 12, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (43, N'LuzBailey', N'123', N'null', N'LuzBailey@gmail.com', N'LuzBailey', N'Female', CAST(N'1992-05-04' AS Date), 12, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (44, N'EdmundMarsh
', N'123', N'null', N'EdmundMarsh@gmail.com', N'EdmundMarsh', N'Female', CAST(N'1992-05-04' AS Date), 12, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (45, N'WarrenEvans', N'123', N'null', N'WarrenEvans@gmail.com', N'WarrenEvans', N'Female', CAST(N'1992-05-04' AS Date), 12, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (46, N'CharlesMedina', N'123', N'null', N'CharlesMedina@gmail.com', N'CharlesMedina', N'Female', CAST(N'1992-05-04' AS Date), 13, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (47, N'TravisSimon', N'123', N'null', N'TravisSimon@gmail.com', N'TravisSimon', N'Female', CAST(N'1992-05-04' AS Date), 13, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (48, N'WinifredGray', N'123', N'null', N'WinifredGray@gmail.com', N'WinifredGray', N'Female', CAST(N'1992-05-04' AS Date), 13, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (49, N'ChristyWong', N'123', N'null', N'ChristyWong@gmail.com', N'ChristyWong', N'Female', CAST(N'1992-05-04' AS Date), 13, N'01212322412', N'Doctor', N'NA', N'NA', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (50, N'AnNTN', N'123', N'null', N'AnNTN@gmail.com', N'Nguyen Thanh An', N'Male', CAST(N'1988-12-04' AS Date), 6, N'0123456998', N'Nurse', N'123 Nguyen Xi', N'University', 1, 3)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (51, N'poster', N'123', N'null', N'poster@gmail.com', N'poster', N'Male', CAST(N'1996-05-05' AS Date), 1, N'01887880791', N'Other', N'', N'', 1, 5)
SET IDENTITY_INSERT [dbo].[User] OFF
ALTER TABLE [dbo].[MedicalBooking]  WITH CHECK ADD  CONSTRAINT [FK_MedicalBooking_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([DepartmentId])
GO
ALTER TABLE [dbo].[MedicalBooking] CHECK CONSTRAINT [FK_MedicalBooking_Department]
GO
ALTER TABLE [dbo].[MedicalBooking]  WITH CHECK ADD  CONSTRAINT [FK_MedicalBooking_Service] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[Service] ([ServiceId])
GO
ALTER TABLE [dbo].[MedicalBooking] CHECK CONSTRAINT [FK_MedicalBooking_Service]
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
ALTER TABLE [dbo].[Service]  WITH CHECK ADD  CONSTRAINT [FK_Service_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([DepartmentId])
GO
ALTER TABLE [dbo].[Service] CHECK CONSTRAINT [FK_Service_Department]
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
ALTER TABLE [dbo].[ShiftSchedulerManager]  WITH CHECK ADD  CONSTRAINT [FK_ShiftSchedulerManager_Department] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Department] ([DepartmentId])
GO
ALTER TABLE [dbo].[ShiftSchedulerManager] CHECK CONSTRAINT [FK_ShiftSchedulerManager_Department]
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
ALTER DATABASE [Hospital_Portal] SET  READ_WRITE 
GO
