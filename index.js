/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", sans-serif;
    line-height: 1.6;
    background-color: #f4f6f8;
    color: #333;
    padding: 20px;
  }
  
  header {
    text-align: center;
    padding: 40px 20px;
    background-color: #a3d2ca;
    color: #fff;
    border-radius: 12px;
    margin-bottom: 30px;
  }
  
  header h1 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  main {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  }
  
  article p {
    margin-bottom: 20px;
    font-size: 1.1em;
  }
  
  .image-placeholder {
    margin: 20px 0;
    text-align: center;
  }
  
  .image-placeholder img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  footer {
    text-align: center;
    margin-top: 40px;
    font-size: 0.9em;
    color: #888;
  }
  
  /* Responsividade */
  @media (max-width: 600px) {
    header h1 {
      font-size: 1.5em;
    }
  
    article p {
      font-size: 1em;
    }
  
    main {
      padding: 20px;
    }
  }
  
