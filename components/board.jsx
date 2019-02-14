import React from 'react';
import Tile from './tile';


class Board extends React.Component {
    constructor(props){
        super(props);
        this.renderTiles = this.renderTiles.bind(this)
        this.renderRows = this.renderRows.bind(this)
    }
    renderRows() {
        return this.props.board.grid.map((row, index) => {
            return (
                <div className='row' id={index}>
                    {this.renderTiles(row, index)}
                </div>
            )
        })
    }
    renderTiles(row, index) {
        return (
            row.map((tile, j) => {
                return (<Tile 
                    
                    tile={tile}
                    updateGame={this.props.updateGame}
                    key={index * this.props.board.gridSize + j}
                />)
            })
        )
    }
    render() {
        
        return (
            <div>
                
                {this.renderRows()}

            </div>
        )
    }
}

export default Board