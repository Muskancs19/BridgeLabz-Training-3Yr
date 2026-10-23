class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }
    buildForm() {
        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach((field, index) => {
            const fieldId = `field_${index}`;

            formHTML += `
                <label for="${fieldId}">${field.label}</label>
                <input
                    type="${field.type}"
                    id="${fieldId}"
                    name="${field.name}"
                    placeholder="${field.label}"
                    required
                >
            `;
        });

        formHTML += `
            <button type="submit">Submit</button>
            </form>
        `;

        this.container.innerHTML = formHTML;

        document.getElementById("dynamicForm")
            .addEventListener("submit", (event) => {
                event.preventDefault();

                const formData = this.getFormData();

                document.getElementById("output").textContent =
                    JSON.stringify(formData, null, 2);
            });
    }
    getFormData() {
        const formData = {};

        this.fields.forEach((field, index) => {
            const fieldId = `field_${index}`;

            formData[field.name] =
                document.getElementById(fieldId).value;
        });

        return formData;
    }
}
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];
const formBuilder = new FormBuilder(fields, "formContainer");

formBuilder.buildForm();