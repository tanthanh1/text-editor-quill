"use client";
import UploadForm from "../../components/UploadForm";
import Script from "next/script";
const page = () => {
    return (
        <div>
            <UploadForm />

            <Script
                src="https://widget.cloudinary.com/v2.0/global/all.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log("Cloudinary script loaded");
                }}
            />
        </div>
    );
};
export default page;
