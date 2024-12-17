-- CreateTable
CREATE TABLE "Banner" (
    "id" SERIAL NOT NULL,
    "image" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);
