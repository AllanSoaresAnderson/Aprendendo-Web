class Cardnews extends HTMLElement{
    constructor(){
        super();


        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }


    build(){

        /*Criando os elementos*/
        const componentRoot = document.createElement('div');
        const cardLeft = document.createElement('div');
        const cardRight = document.createElement('div');
        const autor = document.createElement('span');
        const linkTitle = document.createElement('a');
        const newsContent = document.createElement('p');
        const newsImage = document.createElement('img');


        /*Propriedades dos elementos*/
        componentRoot.setAttribute('class', 'card');
        cardLeft.setAttribute('class', 'card-left');
        cardRight.setAttribute('class', 'card-right');

        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');
        linkTitle.textContent = this.getAttribute('title');
        newsContent.textContent = this.getAttribute('content');

        linkTitle.href = this.getAttribute('link-title');
        newsImage.src = (this.getAttribute('photo') || 'https://imgs.search.brave.com/qdCjYlJ38wgED0igJWjfmAQUtGyUtw6B65fwnpeX7QQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzAwLzY0/LzM2MF9GXzEwOTAw/NjQyNl8zODhQYWdx/aWVsZ2pGVEFNZ1c1/OWpSYURtUEp2U0JV/TC5qcGc')
        newsImage.alt = 'Foto da Notícia';

        /*Pendurando as filhas*/
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);


        /*Retorno*/
        return componentRoot;

    }



    styles(){

        const style = document.createElement('style');
        style.textContent = `
        .card{
            width: 720px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card-left{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .card-left > h1{
            margin-top: 15px;
            font-size: 20px;
        }
        
        .card-left > p{
            color: rgb(70, 70, 70);
        }
        
        .card-left > span{
            font-weight: 400;
        }
        
        .card .card-right{
            width: 40%;
        }
        
        
        .card .card-right img{
            width: 100%;
        }
        
        `

        return style
    }
}


customElements.define('card-news', Cardnews)