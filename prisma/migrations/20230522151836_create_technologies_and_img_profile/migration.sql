-- CreateTable
CREATE TABLE "ImageProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imgBase64" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "technologies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "study_start_date" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "technologies_name_key" ON "technologies"("name");
