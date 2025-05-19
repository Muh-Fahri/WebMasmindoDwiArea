const handleUnauthorized = (error) => {
    if (error.response && error.response.status === 401) {
        window.location.href = '/Login-admin-123';
    } else {
        console.error(error);
        alert('Terjadi kesalahan');
    }
};

export default handleUnauthorized;