$(document).ready(function() {
    // We check if frappe is defined to avoid errors on login pages or external sites
    if (typeof frappe !== "undefined") {
        
        // Using get_single_value is cleaner for Single DocTypes
        frappe.db.get_single_value('Global CSS Settings', 'enable').then(enabled => {
            if (enabled) {
                frappe.db.get_single_value('Global CSS Settings', 'css').then(custom_css => {
                    if (custom_css) {
                        const style = document.createElement('style');
                        style.type = 'text/css';
                        style.id = 'global-custom-css-injection';
                        style.innerHTML = custom_css;
                        document.head.appendChild(style);
                    }
                });
            }
        });
    }
});