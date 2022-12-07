function generateHTML(cardData) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css" />

    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
      crossorigin="anonymous" 
      referrerpolicy="no-referrer" 
    /> 
    
    <title>My Team</title>
</head>

<body>
    <header class="dashboard-header text-center">
        <h1>My Team</h1>
    </header>

    <main>
        ${cardData}
    </main>
    
</body>
</html>
`;
}

module.exports = generateHTML;