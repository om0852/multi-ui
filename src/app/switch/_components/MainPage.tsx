import React, { useState } from 'react';
import Switch_92 from './Switch_92'
import Switch_93 from './Switch_93'
import Switch_94 from './Switch_94'
import Switch_95 from './Switch_95'
import Switch_96 from './Switch_96'

interface State {
  origami: boolean;
  crystal: boolean;
  compass: boolean;
  galaxy: boolean;
  steampunk: boolean;
}

const MainPage = () => {
  const [state, setState] = useState<State>({
    origami: false,
    crystal: false,
    compass: false,
    galaxy: false,
    steampunk: false,
  });

  return (
    <div className="container">
      <div className="switch-section">
        <h3>Origami Switch</h3>
        <Switch_92 
          checked={state.origami}
          onChange={(checked: boolean) => setState({ ...state, origami: checked })}
        />
        <p>State: {state.origami ? 'ON' : 'OFF'}</p>
      </div>

      <div className="switch-section">
        <h3>Crystal Switch</h3>
        <Switch_93 
          checked={state.crystal}
          onChange={(checked: boolean) => setState({ ...state, crystal: checked })}
        />
        <p>State: {state.crystal ? 'ON' : 'OFF'}</p>
      </div>

      <div className="switch-section">
        <h3>Compass Switch</h3>
        <Switch_94 
          checked={state.compass}
          onChange={(checked: boolean) => setState({ ...state, compass: checked })}
        />
        <p>State: {state.compass ? 'ON' : 'OFF'}</p>
      </div>

      <div className="switch-section">
        <h3>Galaxy Switch</h3>
        <Switch_95 
          checked={state.galaxy}
          onChange={(checked: boolean) => setState({ ...state, galaxy: checked })}
        />
        <p>State: {state.galaxy ? 'ON' : 'OFF'}</p>
      </div>

      <div className="switch-section">
        <h3>Steampunk Switch</h3>
        <Switch_96 
          checked={state.steampunk}
          onChange={(checked: boolean) => setState({ ...state, steampunk: checked })}
        />
        <p>State: {state.steampunk ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  );
}; 