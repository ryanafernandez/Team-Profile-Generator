function generateCard(name, id, email, role, roleData) {

    switch (role) {
        case 'Manager':
            return `
        <section class="employee-card">
            <header class="card-header">
                <h2>${name}</h2>
                <h3><i class="fa-solid fa-users"></i> ${role}</h3>
            </header>

            <div class="card-info">
                <div class="id">
                    <p>ID: ${id}</p>
                </div>

                <div class="email">
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                </div>

                <div class="specific-info">
                    <p>Office Number: ${roleData}</p>
                </div>
            </div>
        </section>
`
        case 'Engineer':
            roleInfo = 'GitHub';
            return `
        <section class="employee-card">
            <header class="card-header">
                <h2>${name}</h2>
                <h3><i class="fa-solid fa-keyboard"></i> ${role}</h3>
            </header>

            <div class="card-info">
                <div class="id">
                    <p>ID: ${id}</p>
                </div>

                <div class="email">
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                </div>

                <div class="specific-info">
                    <p>GitHub: <a href="https://github.com/${roleData}" target="_blank">${roleData}</a></p>
                </div>
            </div>
        </section>
`
        case 'Intern':
            roleInfo = 'School'
            return `
        <section class="employee-card">
            <header class="card-header">
                <h2>${name}</h2>
                <h3><i class="fa-solid fa-graduation-cap"></i> ${role}</h3>
            </header>

            <div class="card-info">
                <div class="id">
                    <p>ID: ${id}</p>
                </div>

                <div class="email">
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                </div>

                <div class="specific-info">
                    <p>School: ${roleData}</p>
                </div>
            </div>
        </section>
`
        default:
            console.error("Role not found");
            return 0;
    }


}

module.exports = generateCard;