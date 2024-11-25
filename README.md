# MedEquip Pro V1.0

## Database Entities and Normalization (PostgreSQL Dialect)

1. Equipment
* equipmentId - SERIAL (Primary Key)
* name - VARCHAR
* description - TEXT
* category - VARCHAR
* adminId - INT (Foreign Key referencing Admin)

2. Image
* imageId - SERIAL (Primary Key)
* equipmentId - INT (Foreign Key referencing Equipment)
* imageUrl - VARCHAR

3. Tag
* tagId - SERIAL (Primary Key)
* equipmentId - INT (Foreign Key referencing Equipment)
* tag - VARCHAR

4. UseCase
* useCaseId - SERIAL (Primary Key)
* equipmentId - INT (Foreign Key referencing Equipment)
* useCase - TEXT

5. Specification
* specificationId - SERIAL (Primary Key)
* equipmentId - INT (Foreign Key referencing Equipment)
* ageRange - VARCHAR
* heightRange - VARCHAR
* weightRange - VARCHAR
* gender - VARCHAR
* diseaseType - VARCHAR
* diseaseSeverity - ENUM('Male', 'Female')

6. Admin
* adminId - SERIAL (Primary Key)
* name - VARCHAR
* email - VARCHAR


1. Equipment
   The core entity representing medical equipment.

Attribute	Data Type	Description
* equipmentId	SERIAL (PK)	Auto-incremented unique ID for each equipment
* name	VARCHAR	Name of the equipment
* description	TEXT	Detailed description of the equipment
* category	VARCHAR	Category the equipment belongs to (e.g., surgical tools)
* adminId	INT (FK)	Foreign key referencing the Admin who created the equipment

2. Image
   Stores multiple images for each piece of equipment.

Attribute	Data Type	Description
* imageId	SERIAL (PK)	Auto-incremented unique ID for each image
* equipmentId	INT (FK)	Foreign key referencing the equipment
* imageUrl	VARCHAR	URL or file path to the equipment image

3. Tag
   Stores multiple tags or keywords for each piece of equipment.

Attribute	Data Type	Description
* tagId	SERIAL (PK)	Auto-incremented unique ID for each tag
* equipmentId	INT (FK)	Foreign key referencing the equipment
* tag	VARCHAR	Tag or keyword (e.g., "surgical", "diagnostic")

4. UseCase
   Stores multiple use cases for each piece of equipment.

Attribute	Data Type	Description
* useCaseId	SERIAL (PK)	Auto-incremented unique ID for each use case
* equipmentId	INT (FK)	Foreign key referencing the equipment
* useCase	TEXT	Description of how the equipment is used

5. Specification
   Captures various specifications of the equipment.

Attribute	Data Type	Description
* specificationId	SERIAL (PK)	Auto-incremented unique ID for each specification
* equipmentId	INT (FK)	Foreign key referencing the equipment
* ageRange	VARCHAR	Suitable age range (e.g., "0-5 years")
* heightRange	VARCHAR	Suitable height range (e.g., "150-180 cm")
* weightRange	VARCHAR	Suitable weight range (e.g., "50-80 kg")
* gender	VARCHAR	Gender (e.g., male, female)
* diseaseType	VARCHAR	Specific diseases the equipment is suitable for
* diseaseSeverity	VARCHAR	Severity levels (e.g., mild, moderate, severe)

6. Admin
   Represents admin users who manage the equipment.

Attribute	Data Type	Description
* adminId	SERIAL (PK)	Auto-incremented unique ID for each admin
* name	VARCHAR	Name of the admin
* email	VARCHAR	Email address of the admin

ERD (Relational Database Model)
Equipment has a one-to-many relationship with Image, Tag, UseCase, and Specification.
Admin has a one-to-many relationship with Equipment.
