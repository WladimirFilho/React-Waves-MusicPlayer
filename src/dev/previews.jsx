import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Song from "../components/Song";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Song">
                <Song/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews