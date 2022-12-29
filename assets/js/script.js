function copyText(copyInput) {
    navigator.clipboard.writeText(copyInput);
    alert("Copied the text: " + copyInput);
}

if (window.location.pathname === "/donate") {
    window.onload = () => {
        $("#donateModal").modal("show");
    };
} else if (window.location.pathname === "/thankyou") {
    window.onload = () => {
        $("#thankyouModal").modal("show");
    };
}
