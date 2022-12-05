/*
  Warnings:

  - The primary key for the `ConsultantApplication` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ConsultantApplication" DROP CONSTRAINT "ConsultantApplication_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ConsultantApplication_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ConsultantApplication_id_seq";
