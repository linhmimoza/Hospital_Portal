USE [master]
GO
/****** Object:  Database [Hospital_Portal]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Article]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[BookingNumber]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Category]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Department]    Script Date: 29-03-2018 5:35:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Department](
	[DepartmentId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[Status] [int] NOT NULL,
	[Code] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED 
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Introduce]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[MedicalBooking]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Meeting]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Mission]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[MissionWorker]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Notification]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Number]    Script Date: 29-03-2018 5:35:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Number](
	[MedicalBookingId] [int] NOT NULL,
	[SpecialistId] [int] NOT NULL,
	[ServiceId] [int] NOT NULL,
	[TimeId] [int] NOT NULL,
	[Number] [int] NOT NULL,
 CONSTRAINT [PK_Number] PRIMARY KEY CLUSTERED 
(
	[MedicalBookingId] ASC,
	[SpecialistId] ASC,
	[ServiceId] ASC,
	[TimeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Role]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Room]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Service]    Script Date: 29-03-2018 5:35:42 PM ******/
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
 CONSTRAINT [PK_Service_1] PRIMARY KEY CLUSTERED 
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Shift]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[ShiftDay]    Script Date: 29-03-2018 5:35:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ShiftDay](
	[ShiftDayID] [int] IDENTITY(1,1) NOT NULL,
	[ShiftDay] [nvarchar](50) NOT NULL,
	[DayInWeek] [nvarchar](50) NOT NULL,
	[ShiftScheduleId] [int] NOT NULL,
 CONSTRAINT [PK_WorkDay] PRIMARY KEY CLUSTERED 
(
	[ShiftDayID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ShiftSchedule]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[ShiftSchedulerManager]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[ShiftWorker]    Script Date: 29-03-2018 5:35:42 PM ******/
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
/****** Object:  Table [dbo].[Time]    Script Date: 29-03-2018 5:35:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Time](
	[TimeId] [int] IDENTITY(1,1) NOT NULL,
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
/****** Object:  Table [dbo].[User]    Script Date: 29-03-2018 5:35:42 PM ******/
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
SET IDENTITY_INSERT [dbo].[Article] ON 

INSERT [dbo].[Article] ([ArticleId], [Title], [CategoryId], [UploadBy], [UploadDate], [UpdateBy], [UpdateDate], [Status], [Link], [Describe]) VALUES (1, N'List doctor', 1, 2, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2, N'/a', NULL)
SET IDENTITY_INSERT [dbo].[Article] OFF
SET IDENTITY_INSERT [dbo].[Category] ON 

INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (1, N'Hospital Information', N'Hospital infromation, notification,contac', 1)
INSERT [dbo].[Category] ([CategoryId], [CategoryName], [Description], [Status]) VALUES (2, N'Medical news', N'Medical information, new, article..', 1)
SET IDENTITY_INSERT [dbo].[Category] OFF
SET IDENTITY_INSERT [dbo].[Department] ON 

INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (1, N'Updated', N'new updated', 1, N'D1')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (2, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D2')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (3, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 2, N'D3')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (4, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D4')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (5, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D5')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (6, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D6')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (7, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D7')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (8, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D8')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (9, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D9')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (10, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D10')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (11, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D11')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (12, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D12')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (13, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 1, N'D13')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (14, N'NEW NEPHROLOGY – ENDOCRINOLOGY', N'new', 2, N'D14')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (15, N'create name', N'new', 1, N'D15')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (16, N'create name', N'new', 1, N'D16')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (17, N'new new', N'new new new ', 1, N'D17a')
INSERT [dbo].[Department] ([DepartmentId], [DepartmentName], [Description], [Status], [Code]) VALUES (19, N'new dept', N'llll', 1, N'ND')
SET IDENTITY_INSERT [dbo].[Department] OFF
SET IDENTITY_INSERT [dbo].[Meeting] ON 

INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (3, 1, N'New Year meeting', CAST(N'06:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-02-21' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (4, 1, N'New Year meeting', CAST(N'02:00:00' AS Time), CAST(N'00:30:00' AS Time), CAST(N'2018-02-23' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (5, 1, N'New Year meeting', CAST(N'10:00:00' AS Time), NULL, CAST(N'2018-02-22' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (6, 1, N'New Year meeting', CAST(N'04:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-02-21' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (7, 1, N'New Year meeting', CAST(N'06:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-03-21' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (8, 1, N'New Year meeting', CAST(N'02:00:00' AS Time), CAST(N'00:30:00' AS Time), CAST(N'2018-03-23' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (9, 1, N'New Year meeting', CAST(N'10:00:00' AS Time), NULL, CAST(N'2018-03-22' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (10, 1, N'New Year meeting', CAST(N'04:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-03-21' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (11, 1, N'New Year meeting', CAST(N'02:00:00' AS Time), CAST(N'00:30:00' AS Time), CAST(N'2018-03-23' AS Date), N'New Year Meeting', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (12, 1, N'New Year meeting', CAST(N'10:00:00' AS Time), NULL, CAST(N'2018-03-22' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (13, 1, N'New Year meeting', CAST(N'04:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-03-21' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (14, 1, N'New Year meeting', CAST(N'06:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-02-21' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (15, 1, N'New Year meeting', CAST(N'02:00:00' AS Time), CAST(N'00:30:00' AS Time), CAST(N'2018-02-23' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (16, 1, N'New Year meeting', CAST(N'10:00:00' AS Time), NULL, CAST(N'2018-02-22' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (17, 1, N'New Year meeting', CAST(N'04:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-02-21' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (18, 1, N'New Year meeting', CAST(N'06:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-03-21' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 2)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (19, 1, N'New Year meeting', CAST(N'02:00:00' AS Time), CAST(N'00:30:00' AS Time), CAST(N'2018-03-23' AS Date), N'No more champagne 
And the fireworks are through 
Here we are, me and you 
Feeling lost and feeling blue 
It''s the end of the party 
And the morning seems so grey 
So unlike yesterday ', NULL, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 3)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (22, 2, N'name', CAST(N'06:00:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'2018-04-01' AS Date), N'content', N'Note', 3, CAST(N'2018-04-01 00:00:00.000' AS DateTime), 3, CAST(N'2018-04-01 00:00:00.000' AS DateTime), 1)
INSERT [dbo].[Meeting] ([MeetingId], [RoomId], [MeetingName], [StartTime], [Duration], [Date], [Content], [Note], [CreateBy], [CreateDate], [UpdateBy], [UpdateDate], [Status]) VALUES (23, 1, N'New Year meeting', CAST(N'04:00:00' AS Time), CAST(N'01:00:00' AS Time), CAST(N'2018-02-21' AS Date), N'New Year Meeting', N'null', 5, CAST(N'2018-03-21 23:08:32.000' AS DateTime), 5, CAST(N'2018-03-21 23:08:32.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Meeting] OFF
SET IDENTITY_INSERT [dbo].[Mission] ON 

INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (1, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-03-19 23:16:55.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (2, CAST(N'2010-10-10' AS Date), CAST(N'2010-11-10' AS Date), N'Place', N'Content', N'Note', 2, 5, CAST(N'2010-10-10 00:00:00.000' AS DateTime), 5, CAST(N'2010-10-10 00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (3, CAST(N'2010-10-10' AS Date), CAST(N'2010-11-10' AS Date), N'Place', N'Content', N'Note', 3, 5, CAST(N'2010-10-10 00:00:00.000' AS DateTime), 5, CAST(N'2010-10-10 00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (5, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 2, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (6, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 2, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (7, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 2, 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime), 5, CAST(N'2018-02-21 00:00:00.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (8, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 2, 5, CAST(N'2018-03-05 12:46:55.000' AS DateTime), 5, CAST(N'2018-03-05 12:46:55.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (9, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 2, 5, CAST(N'2018-03-05 12:48:15.000' AS DateTime), 5, CAST(N'2018-03-05 12:48:15.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (16, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-03-19 23:47:33.000' AS DateTime), 5, CAST(N'2018-03-19 23:47:33.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (17, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-03-19 23:48:10.000' AS DateTime), 5, CAST(N'2018-03-19 23:48:10.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (18, CAST(N'2018-03-08' AS Date), CAST(N'2018-03-10' AS Date), N'Ha Noi', N'abc xyz', N'N/A', 1, 5, CAST(N'2018-03-19 23:50:27.000' AS DateTime), 5, CAST(N'2018-03-19 23:50:27.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (26, CAST(N'2018-03-16' AS Date), CAST(N'2018-03-23' AS Date), N'sai gon', N'aaaa', N'asdasd', 1, 4, CAST(N'2018-03-20 00:10:46.000' AS DateTime), 4, CAST(N'2018-03-20 00:10:46.000' AS DateTime))
INSERT [dbo].[Mission] ([MissionId], [StartDate], [EndDate], [Place], [Content], [Note], [Status], [Createby], [CreateDate], [Updateby], [UpdateDate]) VALUES (27, CAST(N'2018-03-16' AS Date), CAST(N'2018-03-18' AS Date), N'asd', N'asd', N'asd', 1, 1, CAST(N'2018-03-23 13:40:04.000' AS DateTime), 1, CAST(N'2018-03-23 13:40:04.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Mission] OFF
SET IDENTITY_INSERT [dbo].[MissionWorker] ON 

INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (6, 6, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (9, 7, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (10, 7, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (11, 8, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (12, 9, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (17, 1, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (18, 1, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (19, 1, 3)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (20, 16, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (21, 16, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (22, 16, 3)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (23, 17, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (24, 17, 5)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (25, 17, 3)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (26, 18, 4)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (27, 26, 1)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (28, 26, 12)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (29, 26, 15)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (30, 27, 10)
INSERT [dbo].[MissionWorker] ([MissionWorkerId], [MissionId], [UserId]) VALUES (31, 27, 16)
SET IDENTITY_INSERT [dbo].[MissionWorker] OFF
SET IDENTITY_INSERT [dbo].[Notification] ON 

INSERT [dbo].[Notification] ([NotificationId], [NotificationName], [Content], [CreateDate], [CreateBy], [UpdateDate], [UpdateBy], [Status]) VALUES (2, N'Chú Ý', N'Cảm ơn bạn đã chú ý đến chú ý này sự chú ý của bạn sẽ được chú ý', CAST(N'2018-02-28 00:00:00.000' AS DateTime), 2, CAST(N'2018-02-28 00:00:00.000' AS DateTime), 2, 2)
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
SET IDENTITY_INSERT [dbo].[Shift] ON 

INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (60, 0, CAST(N'12:00:00' AS Time), CAST(N'08:00:00' AS Time), 91, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (61, 1, CAST(N'08:00:00' AS Time), CAST(N'16:00:00' AS Time), 91, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (62, 2, CAST(N'16:00:00' AS Time), CAST(N'12:00:00' AS Time), 91, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (63, 0, CAST(N'01:00:00' AS Time), CAST(N'01:00:00' AS Time), 92, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (64, 0, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 98, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (65, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 99, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (66, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 100, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (67, 0, CAST(N'00:00:00' AS Time), CAST(N'04:00:00' AS Time), 101, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (68, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 102, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (69, 0, CAST(N'04:00:00' AS Time), CAST(N'16:00:00' AS Time), 103, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (70, 0, CAST(N'01:00:00' AS Time), CAST(N'17:00:00' AS Time), 104, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (71, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 105, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (72, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 106, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (73, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 107, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (74, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 108, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (75, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 109, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (76, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 110, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (77, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 111, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (78, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 112, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (79, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 113, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (80, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 114, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (81, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 115, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (82, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 116, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (83, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 117, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (84, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 118, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (85, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 119, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (86, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 120, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (87, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 121, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (88, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 122, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (89, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 123, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (90, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 124, N'')
INSERT [dbo].[Shift] ([ShiftId], [ShiftNO], [StartTime], [EndTime], [ShiftDayID], [Other]) VALUES (91, 0, CAST(N'01:00:00' AS Time), CAST(N'04:00:00' AS Time), 125, N'')
SET IDENTITY_INSERT [dbo].[Shift] OFF
SET IDENTITY_INSERT [dbo].[ShiftDay] ON 

INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (91, N'19/3/2018', N'Mon', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (92, N'20/3/2018', N'Tue', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (93, N'21/3/2018', N'Wed', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (94, N'22/3/2018', N'Thu', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (95, N'23/3/2018', N'Fri', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (96, N'24/3/2018', N'Sat', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (97, N'25/3/2018', N'Sun', 19)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (98, N'5/3/2018', N'Mon', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (99, N'6/3/2018', N'Tue', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (100, N'7/3/2018', N'Wed', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (101, N'8/3/2018', N'Thu', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (102, N'9/3/2018', N'Fri', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (103, N'10/3/2018', N'Sat', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (104, N'11/3/2018', N'Sun', 20)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (105, N'16/4/2018', N'Mon', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (106, N'17/4/2018', N'Tue', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (107, N'18/4/2018', N'Wed', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (108, N'19/4/2018', N'Thu', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (109, N'20/4/2018', N'Fri', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (110, N'21/4/2018', N'Sat', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (111, N'22/4/2018', N'Sun', 24)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (112, N'16/4/2018', N'Mon', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (113, N'17/4/2018', N'Tue', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (114, N'18/4/2018', N'Wed', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (115, N'19/4/2018', N'Thu', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (116, N'20/4/2018', N'Fri', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (117, N'21/4/2018', N'Sat', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (118, N'22/4/2018', N'Sun', 25)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (119, N'16/4/2018', N'Mon', 26)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (120, N'17/4/2018', N'Tue', 26)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (121, N'18/4/2018', N'Wed', 26)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (122, N'19/4/2018', N'Thu', 26)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (123, N'20/4/2018', N'Fri', 26)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (124, N'21/4/2018', N'Sat', 26)
INSERT [dbo].[ShiftDay] ([ShiftDayID], [ShiftDay], [DayInWeek], [ShiftScheduleId]) VALUES (125, N'22/4/2018', N'Sun', 26)
SET IDENTITY_INSERT [dbo].[ShiftDay] OFF
SET IDENTITY_INSERT [dbo].[ShiftSchedule] ON 

INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (19, 2, 1, 3, CAST(N'2018-03-22 01:47:26.000' AS DateTime), CAST(N'2018-03-22 01:47:26.000' AS DateTime), 3, N'2018-W12')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (20, 3, 1, 1, CAST(N'2018-03-23 12:35:33.000' AS DateTime), CAST(N'2018-03-23 12:35:33.000' AS DateTime), 1, N'2018-W10')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (24, 15, 1, 1, CAST(N'2018-03-27 03:00:33.000' AS DateTime), CAST(N'2018-03-27 03:00:33.000' AS DateTime), 1, N'2018-W16')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (25, 15, 1, 1, CAST(N'2018-03-27 03:01:35.000' AS DateTime), CAST(N'2018-03-27 03:01:35.000' AS DateTime), 1, N'2018-W16')
INSERT [dbo].[ShiftSchedule] ([ShiftScheduleId], [DepartmentId], [Status], [Createby], [CreateDate], [UpdateDate], [Updateby], [Week]) VALUES (26, 15, 1, 1, CAST(N'2018-03-27 03:04:37.000' AS DateTime), CAST(N'2018-03-27 03:04:37.000' AS DateTime), 1, N'2018-W16')
SET IDENTITY_INSERT [dbo].[ShiftSchedule] OFF
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W12', 2, 19, 19)
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W12', 3, 20, 20)
INSERT [dbo].[ShiftSchedulerManager] ([Week], [DepartmentId], [Waiting], [Checked]) VALUES (N'2018-W16', 15, 26, 0)
SET IDENTITY_INSERT [dbo].[ShiftWorker] ON 

INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (94, 60, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (95, 60, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (96, 61, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (97, 61, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (98, 62, 5)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (99, 62, 6)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (100, 63, 7)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (101, 63, 8)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (102, 64, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (103, 64, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (104, 65, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (105, 65, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (106, 66, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (107, 66, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (108, 67, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (109, 67, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (110, 68, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (111, 68, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (112, 69, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (113, 69, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (114, 70, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (115, 70, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (116, 71, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (117, 72, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (118, 73, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (119, 74, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (120, 75, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (121, 76, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (122, 77, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (123, 78, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (124, 79, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (125, 80, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (126, 81, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (127, 82, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (128, 83, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (129, 84, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (130, 85, 1)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (131, 86, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (132, 87, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (133, 88, 4)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (134, 89, 3)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (135, 90, 2)
INSERT [dbo].[ShiftWorker] ([ShiftWorkerId], [ShiftId], [UserId]) VALUES (136, 91, 1)
SET IDENTITY_INSERT [dbo].[ShiftWorker] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (1, N'admin', N'123', N'null', N'Longhhse61761@fpt.edu.vn', N'H? Hoàng Long', N'Male', CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (2, N'q', N'123', N'/q', N'q@gmail.com', N'qqq', N'Male', CAST(N'1996-01-01' AS Date), 1, N'0123456789', N'Nurse', N'123/4 a street', N'University degree', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (3, N'w', N'123', N'/w', N'w@gmail.com', N'www', N'Male', CAST(N'1996-01-01' AS Date), 1, N'0123456789', N'Doctor', N'123/5 a street', N'University degree', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (4, N'e', N'123', N'/e', N'e@gmail.com', N'eee', N'Male', CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Nurse', N'123/4 a street', N'University degree', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (5, N'r', N'123', N'/q', N'r@gmail.com', N'rrr', N'Male', CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Doctor', N'123/4 a street', N'University degree', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (6, N't', N'123', N'/t', N't@gmail.com', N'eee', N'Male', CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Nurse', N'123/4 a street', N'University degree', 1, 5)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (7, N'y', N'123', N'/y', N'y@gmail.com', N'rrr', N'Male', CAST(N'1996-01-01' AS Date), 2, N'0123456789', N'Doctor', N'123/4 a street', N'University degree', 1, 5)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (8, N'test', N'password', N'avatar', N'Email', N'Fullname', N'Male', CAST(N'1996-05-05' AS Date), 1, N'phone', N'Position', N'address', N'Certificate', 2, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (9, N'Long123', N'123', N'null', N'Longhhse61761@fpt.edu.vn', N'post', N'Male', CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (10, N'Long123', N'123', N'Avatar', N'Email', N'FullName', N'Male', CAST(N'1996-01-01' AS Date), 1, N'1234567890', N'Position', N'Address', N'Certificate', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (11, N'Long123', N'123', N'null', N'Longhhse61761@fpt.edu.vn', N'post', N'Male', CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (12, N'Long123', N'123', N'new avatar', N'Longhhse61761@fpt.edu.vn', N'post', N'Male', CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (13, N'new', N'null', N'null', N'new@gmail.com', N'H? Hoàng Long', N'Male', CAST(N'1996-05-05' AS Date), 1, N'1111111111111111', N'Doctor', N'123 /4 abc Street', N'FPT', 2, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (14, N'abc', N'123', N'null', N'abc@gmail', N'H? Hoàng Long', N'1', CAST(N'1996-05-05' AS Date), 1, N'018878807091', N'Doctor', N'123 /4 abc Street', N'FPT', 2, 1)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (15, N'qqqqqqqqqq', N'123', N'null', N'qqqqqqqqqqq', N'qqqqqqqqqqqq', N'Male', CAST(N'2018-03-04' AS Date), 12, N'111111111111111', N'Doctor', N'11111111', N'1111111111', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (16, N'aaaaa', N'123', N'null', N'aaaaa', N'aaaa', N'Male', CAST(N'2018-03-27' AS Date), 1, N'11111111111111111', N'Doctor', N'aaa', N'a', 1, 4)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (17, N'qweqwe', N'123', N'null', N'qweqwe', N'qweqwe', N'Male', CAST(N'2018-03-12' AS Date), 1, N'123123123213', N'Nurse', N'qweq', N'qweqw', 1, 5)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (18, N'admin 2', N'123', N'null', N'w@gmail.com', N'www', N'Male', CAST(N'1996-01-01' AS Date), 1, N'0123456789', N'Doctor', N'123/5 a street', N'University degree', 1, 2)
INSERT [dbo].[User] ([UserId], [UserName], [Password], [Avatar], [Email], [FullName], [Sex], [DayOfBirth], [DepartmentId], [Phone], [Position], [Address], [Certificate], [Status], [RoleId]) VALUES (19, N'admin3', N'123', N'null', N'aaaa', N'aaa', N'Male', CAST(N'2018-03-14' AS Date), 17, N'01887880791', N'Doctor', N'1231231', N'1231', 1, 3)
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
