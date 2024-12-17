"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";


interface ImageData {
    path: string;
    name: string;
    format: string;
    uploadedAt: string;
}

interface Banner {
    id: number;
    image: ImageData;
    description: string;
    capture: string;
    createdAt: string;
}

interface FormData {
    bannerId: number;
    bannerDescription: string;
    bannerCapture: string;
    image: ImageData;
}

export default function Page() {
    const [formData, setFormData] = useState<FormData | null>(null);
    const [banners, setBanners] = useState<Banner[]>([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get("api/banner");
                setBanners(response.data.banners);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };

        fetchBanners();
    }, []);

    const handleInputDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>, bannerId: number, image: ImageData,capture: string) => {
        const { value } = e.target;
        setBanners((prevBanners) =>
            prevBanners.map((banner) =>
                banner.id === bannerId
                    ? { ...banner, description: value }
                    : banner
            )
        );
        setFormData((prev) => ({
            ...prev,
            bannerId: bannerId,
            bannerDescription: value,
            bannerCapture:capture,
            image: image,
          
        }));
    };

    const handleInputCaptureChange = (e: React.ChangeEvent<HTMLInputElement>, bannerId: number, image: ImageData,description:string) => {
        const { value } = e.target;
        setBanners((prevBanners) =>
            prevBanners.map((banner) =>
                banner.id === bannerId
                    ? { ...banner, capture: value }
                    : banner
            )
        );
        setFormData((prev) => ({
            ...prev,
            bannerId: bannerId,
            bannerDescription: description,
            bannerCapture: value,
            image: image,
        }));
    };

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        bannerId: number,
        description: string,
        capture: string
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            const response = await fetch("/api/tools/saveFile", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("File upload failed");
            }
    
            const data = await response.json();
    
            // Public klasöründeki dosya yolunu kaydediyoruz
            setBanners((prevBanners) =>
                prevBanners.map((banner) =>
                    banner.id === bannerId
                        ? {
                            ...banner,
                            image: {
                                path: data.path,
                                name: file.name,
                                format: file.type.split("/")[1],
                                uploadedAt: new Date().toISOString(),
                            },
                        }
                        : banner
                )
            );
    
            setFormData({
                bannerId: bannerId,
                bannerDescription: description,
                bannerCapture: capture,
                image: {
                    path: data.path,
                    name: file.name,
                    format: file.type.split("/")[1],
                    uploadedAt: new Date().toISOString(),
                },
            });
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, bannerId: number) => {
        e.preventDefault();

        if (!formData) return;

        const requestBody = {
            image: {
                ...formData.image
            },
            description: formData.bannerDescription,
            capture: formData.bannerCapture
        };

        try {

            const response = await axios.put(`api/banner/${bannerId}`, requestBody);

            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            console.error("Error updating banner:", error);
            alert("Failed to update the banner!");
        }
    };

    return (
        <>
            {banners.map((banner) => (
                <div className="col-span-5 xl:col-span-2" key={banner.id}>
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Banner ID: {banner.id}
                            </h3>
                        </div>
                        <div className="p-7">
                            <form onSubmit={(e) => handleSubmit(e, banner.id)}>
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="h-80 w-80 rounded-full">
                                        <img
                                            src={`${banner.image.path}`}
                                            alt={banner.image.name}
                                            style={{ width: "500px", height: "300px" }}
                                        />
                                    </div>
                                    <div>
                                        <span className="mb-1.5 text-black dark:text-white">
                                            {banner.image.name}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    id="FileUpload"
                                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5"
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                        onChange={(e) =>
                                            handleFileChange(e, banner.id, banner.description,banner.capture)
                                        }
                                    />
                                    <div className="flex flex-col items-center justify-center space-y-3">
                                        <p>
                                            <span className="text-primary">Click to upload</span> or
                                            drag and drop
                                        </p>
                                        <p className="mt-1.5">PNG, JPG</p>
                                        <p>( 1920 X 980px )</p>
                                    </div>
                                </div>
                                <div  id="ImageCapture"
                                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">
                                    <input
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        name="imageCature"
                                        id="imageCapture"
                                        placeholder="Write your Image Capture"
                                        value={banner.capture || ""}
                                        onChange={(e) =>
                                            handleInputCaptureChange(e, banner.id, banner.image,banner.description)
                                        }
                                    ></input>
                                </div>
                                <div id="ImageDescription"
                                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray px-4 py-4 dark:bg-meta-4 sm:py-7.5">
                                    <textarea
                                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                        name="imageDescription"
                                        id="imageDescription"
                                        rows={2}
                                        placeholder="Write your Image Description"
                                        value={banner.description || ""}
                                        onChange={(e) =>
                                            handleInputDescriptionChange(e, banner.id, banner.image,banner.capture)
                                        }
                                    ></textarea>
                                </div>

                                <div className="flex justify-end gap-4.5 mt-4">
                                    <button
                                        className="flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90"
                                        type="submit"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}