import React, { Component } from 'react';
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class ImageResults extends Component {

    state= {
        open: false,
        currentImg: "",
    }
    render() { 
        let imageListContent;

        const { images } = this.props;

        if (images) {
            imageListContent = (
                <GridList cols={5}>
                    {images.map(img => (
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span>
                                    from <em>{img.user}</em>
                                </span>
                            }
                            actionIcon={
                                <IconButton>
                                    <ZoomIn color="white" />
                                </IconButton>
                            }
                        >
                            <img
                                src={img.largeImageURL} alt={`pictures-of-${images}`}
                            />
                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null;
        }

        const actions = [
            <FlatButton label="Close"
                        primary={true}
                        onClick={this.handleClose}
            />
        ]

        return (
            <div>
                {imageListContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    />
            </div>
        );
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}
 
export default ImageResults;