import React from 'react';


class Board extends React.Component {
    constructor(props){
        super(props);
        this.renderTiles = this.renderTiles.bind(this)
    }
    renderTiles() {
        return this.props.board.map((tile, index) => {
            return (
                <div>
                    
                </div>
            )
        })
    }
    render() {
        
        return (
            <div>
                


            </div>
        )
    }
}

export default Board