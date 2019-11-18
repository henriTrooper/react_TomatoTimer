import React, { Component } from 'react';

import { toast } from 'react-toastify';

import ButtonGroup from './ButtonGroup';


class Timer extends Component {
    // Etat : donnée dont a besoin le timer
    state = {
        initialValue: 10,
        duration: 0,
        message: '',
        handle: 0
    };

    notify = ( type, title) => {
        toast[type](title, {autoClose: 1500});
    }

// Fonction qui permet d'afficher 45:00 au lieu de 45:0
prepend = (value) => {
    return value < 10 ? "0" + value.toString() :  value.toString();
}

    // Fonction qui permet d'afficher 45: 0 au lieu de 45
    formatDuration = () => {
        const minutes = Math.floor(this.state.duration / 60);
        const seconds =  Math.floor(this.state.duration % 60);
        return `${this.prepend(minutes)}:${this.prepend(seconds)}`;
    }

    // On lance un timer des lors que le composant est monté
    //  componentDidMount equivaut au init en angular
    componentDidMount () {
        console.log('componentDidMount ok');
this.setState({
    // on initialise les valeurs de duration déclarés dans le parent
    initialValue: parseInt(this.props.duration, 10) * 60,
    duration : parseInt(this.props.duration, 10) * 60
})
    }

    //Apelé lors de la fermeture du composant
    componentWillUnmount () {
        // Fin du timer
        clearInterval(this.state.handle);
        this.clean()
    }

    count = () => {
        this.setState({
            //On décompte 1 seconde à chaque fois
            duration: this.state.duration - 1
        });
        if (this.state.duration === 0) {
            clearInterval(this.state.handle);
            this.clean()
        }
    };


    clean = (mess) => {
        clearInterval(this.state.handle);
        this.setState({
            message: mess
        });
    }

    start = () => {
        
        this.notify('success','Démarrage');


        const handle = setInterval(() => {
            // quand on veut modifier notre état OBLIGATION  d'utiliser setState()
            this.count();
        }, 1000);

        // On sauvegarde le  l'état du timer
        this.setState({
            handle: handle /* ou handle uniquement */
        });
    }

    stop = () => {
        this.clean('');

        this.notify('error','Pause');
    }

    reset = () => {
        this.clean('');
        this.notify('info','Réinitialisé');

        this.setState({
            duration: this.state.initialValue
        })
    }

    render () {
        return (
            <div>{/* mode javaScript */}
                <h1 style={{marginTop: 15}}>{this.props.title}</h1>
                <div style={{ marginLeft: 15 }}>durée : {this.formatDuration()} </div>
                <ButtonGroup onStart={this.start} onStop={this.stop} onReset={this.reset} />
                <div style={{ marginLeft: 15 }}>{this.state.message}</div>

            </div>
        );
    };
}

export default Timer;