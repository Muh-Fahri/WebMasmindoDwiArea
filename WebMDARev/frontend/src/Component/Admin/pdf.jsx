import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavSide from "./navSide"; // Assuming this is your navigation component
import handleUnauthorized from "./unouthorized"; // Assuming this handles unauthorized API responses
import { useTranslation } from "react-i18next"; // Correct hook for i18n

function PDF() {
    const [pdfList, setPdfList] = useState([]);
    const token = localStorage.getItem('token');
    const { t, i18n } = useTranslation(); // Destructure i18n to get current language

    const [tahunList, setTahunList] = useState("");
    const fileInputRef = useRef(null);

    // Function to fetch PDF data from the API
    const getPdfData = async () => { // Removed { currentLanguage } from parameters, use i18n.language directly
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/admin/pdf/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setPdfList(res.data.pdf);
        } catch (error) {
            console.error("Error fetching PDF data:", error);
            handleUnauthorized(error); // Assuming this function handles redirection/alert for unauthorized access
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        getPdfData();
    }, [token]); // Add token to dependency array if it can change

    // Function to format date based on the current language
    const formatTanggal = (dateString) => {
        if (!dateString) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        // Use i18n.language to dynamically get the current language from react-i18next
        return new Date(dateString).toLocaleDateString(i18n.language, options);
    };

    // Function to download a PDF file
    const downloadPdf = async (storedName, originalName) => { // Added originalName for better downloaded file name
        try {
            const response = await axios.get(`http://localhost:8000/api/admin/pdf/download_pdf/${encodeURIComponent(storedName)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob', // Important for downloading files
            });

            // Create a blob URL and trigger download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            // Use originalName for the downloaded file name if available, otherwise fallback to storedName
            link.setAttribute('download', originalName || storedName);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url); // Clean up the URL object
        } catch (error) {
            console.error('Download error:', error);
            alert(t('download_error_message')); // Use translation for error message
        }
    };

    // Function to create/upload a new PDF
    const createPdfData = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const file = fileInputRef.current.files[0]; // Access file from ref

        if (!file) {
            alert(t('please_select_pdf')); // Use translation
            return;
        }

        const formData = new FormData();
        formData.append('tahun', tahunList);
        formData.append('pdf', file);

        try {
            await axios.post("http://127.0.0.1:8000/api/admin/pdf", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data' // Important for file uploads
                }
            });
            getPdfData(); // Refresh the list after successful upload
            setTahunList(""); // Clear the year input
            if (fileInputRef.current) {
                fileInputRef.current.value = ""; // Clear the file input
            }
            alert(t('add_pdf_success')); // Use translation
        } catch (error) {
            console.error("Upload error:", error);
            alert(t('add_pdf_error')); // Use translation
            handleUnauthorized(error); // Handle potential unauthorized errors
        }
    };

    // Function to delete a PDF
    const deletePdfData = async (uuid) => {
        if (!window.confirm(t('confirm_delete_pdf'))) { // Use translation for confirmation
            return; // If user cancels, stop
        }

        try {
            await axios.delete(`http://127.0.0.1:8000/api/admin/pdf/delete/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            getPdfData(); // Refresh the list after successful deletion
            alert(t('delete_pdf_success')); // Use translation
        } catch (error) {
            console.error('Delete error:', error);
            alert(t('delete_pdf_error')); // Use translation
            handleUnauthorized(error); // Handle potential unauthorized errors
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <NavSide />
            <div className="flex-grow-1 p-3">
                <div className="container">
                    <div className="row p-3 mb-4">
                        <div className="col">
                            <div className="card p-3 text-white" style={{ backgroundColor: '#F16022' }}>
                                <h3>{t('sustainability_report_title')}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col">
                            <div className="card p-3">
                                <h4>{t('add_pdf_title')}</h4>
                                <form onSubmit={createPdfData}>
                                    <div className="mb-3">
                                        <p>{t('pdf_file_label')}</p>
                                        <input
                                            type="file"
                                            id="pdf-upload"
                                            className="form-control"
                                            ref={fileInputRef}
                                            accept=".pdf"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <p>{t('year_label')}</p>
                                        <input
                                            value={tahunList}
                                            onChange={(e) => setTahunList(e.target.value)}
                                            type="number"
                                            className="form-control"
                                            placeholder={t('year_placeholder')}
                                            required
                                            min="1900"
                                            max={new Date().getFullYear() + 5} // Allow a few years into the future for flexibility
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-sm p-3 text-white" style={{ backgroundColor: '#115258' }}>
                                            {t('add_button')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Tabel Data PDF */}
                    <div className="row mb-5">
                        <div className="col">
                            <div className="card p-3">
                                <h4 className="text-success">{t('data_title')}</h4>
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered mt-3">
                                        <thead className="table-light">
                                            <tr>
                                                <th>{t('table_no')}</th>
                                                <th>{t('table_file_name')}</th>
                                                <th>{t('table_created_at')}</th>
                                                <th>{t('table_year')}</th>
                                                <th>{t('table_action')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pdfList.length > 0 ? (
                                                pdfList.map((pdf, index) => (
                                                    <tr key={pdf.uuid}>
                                                        <td>{index + 1}</td>
                                                        <td style={{ maxWidth: '250px' }}>
                                                            <div className="text-truncate" title={pdf.original_name}>{pdf.original_name}</div>
                                                        </td>
                                                        <td className="text-nowrap">{formatTanggal(pdf.created_at)}</td>
                                                        <td className="text-nowrap">{pdf.tahun}</td>
                                                        <td>
                                                            <div className="d-flex flex-column flex-md-row gap-2">
                                                                <button
                                                                    onClick={() => downloadPdf(pdf.stored_name, pdf.original_name)}
                                                                    className="btn btn-sm btn-warning d-flex align-items-center justify-content-center gap-1"
                                                                >
                                                                    <span className="d-none d-md-inline">{t('download_button')}</span>
                                                                    <i className="fas fa-download d-md-none"></i> {/* FontAwesome icon */}
                                                                </button>
                                                                <button
                                                                    className="btn btn-sm btn-danger d-flex align-items-center justify-content-center gap-1"
                                                                    onClick={() => deletePdfData(pdf.uuid)}
                                                                >
                                                                    <span className="d-none d-md-inline">{t('delete_button')}</span>
                                                                    <i className="fas fa-trash-alt d-md-none"></i> {/* FontAwesome icon */}
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="text-center text-muted py-3">
                                                        {t('no_pdf_data')}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PDF;