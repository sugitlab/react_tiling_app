import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";
import "./App.css";

export type ViewId = "a" | "b" | "c" | "new";

const TITLE_MAP: Record<ViewId, string> = {
  a: "Left Window",
  b: "Top Right Window",
  c: "Bottom Right Window",
  new: "New Window",
};

const Mosaic2 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Mosaic<ViewId>
        renderTile={(id, path) => (
          <MosaicWindow<ViewId>
            path={path}
            createNode={() => "new"}
            title={TITLE_MAP[id]}
          >
            <h1>{TITLE_MAP[id]}</h1>
          </MosaicWindow>
        )}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c",
          },
        }}
      />
    </DndProvider>
  );
};

const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
  a: <div>Left Window</div>,
  b: <div>Top Right Window</div>,
  c: <div>Bottom Right Window</div>,
};

const Mosaic1 = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div id="app">
        <Mosaic<string>
          renderTile={(id) => ELEMENT_MAP[id]}
          initialValue={{
            direction: "row",
            first: "a",
            second: {
              direction: "column",
              first: "b",
              second: "c",
            },
            splitPercentage: 40,
          }}
        />
      </div>
    </DndProvider>
  );
};

const App = () => {
  return (
    <div style={{ height: "800px" }}>
      <Mosaic2 />
    </div>
  );
};
export default App;
