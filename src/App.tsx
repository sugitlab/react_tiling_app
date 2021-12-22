import { initial } from "lodash";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Mosaic,
  MosaicWindow,
  MosaicNode,
  MosaicContext,
} from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

type ViewId = "a" | "b" | "c" | "new";

const TITLE_MAP: Record<ViewId, string> = {
  a: "Left Window",
  b: "Top Right Window",
  c: "Bottom Right Window",
  new: "New Window",
};

const initialNode: MosaicNode<ViewId> = {
  direction: "row",
  first: "a",
  second: {
    direction: "column",
    first: "b",
    second: "c",
  },
};

const secondNode: MosaicNode<ViewId> = {
  direction: "row",
  first: "a",
  second: "b",
};

const TilingWindow = () => {
  const [node, setNode] = React.useState<MosaicNode<ViewId>>(initialNode);
  return (
    <DndProvider backend={HTML5Backend}>
      <Mosaic<ViewId>
        renderTile={(id, path) => (
          <MosaicWindow<ViewId>
            path={path}
            createNode={() => "new"}
            title={TITLE_MAP[id]}
            toolbarControls={
              <MosaicContext.Consumer>
                {(context) => {
                  return (
                    <>
                      <button onClick={() => context.mosaicActions.hide(path)}>
                        hide
                      </button>
                      <button
                        onClick={() => context.mosaicActions.remove(path)}
                      >
                        remove
                      </button>
                      <button
                        onClick={() => context.mosaicActions.expand(path, 100)}
                      >
                        expand
                      </button>
                      <button
                        onClick={() => context.mosaicActions.expand(path, 50)}
                      >
                        half
                      </button>
                    </>
                  );
                }}
              </MosaicContext.Consumer>
            }
          >
            <h1>{path}</h1>
          </MosaicWindow>
        )}
        initialValue={node}
        onChange={(node) =>
          console.log(
            "save this object to keep your last layout even if the user restart app",
            node
          )
        }
      />
    </DndProvider>
  );
};

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <TilingWindow />
    </div>
  );
};
export default App;
