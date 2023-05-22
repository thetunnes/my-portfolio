/*
  Warnings:

  - Added the required column `icon` to the `technologies` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_technologies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "study_start_date" DATETIME NOT NULL,
    "icon" TEXT NOT NULL
);
INSERT INTO "new_technologies" ("id", "name", "study_start_date") SELECT "id", "name", "study_start_date" FROM "technologies";
DROP TABLE "technologies";
ALTER TABLE "new_technologies" RENAME TO "technologies";
CREATE UNIQUE INDEX "technologies_name_key" ON "technologies"("name");
CREATE UNIQUE INDEX "technologies_icon_key" ON "technologies"("icon");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
