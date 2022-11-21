const React = {
    index: 0, // state index
    state: [], // state store
    useState: (defaultProp) => {
      const cachedIndex = React.index;
      if (!React.state[cachedIndex]) {
        React.state[cachedIndex] = defaultProp;
      }
  
      const currentState = React.state[cachedIndex];
      const currentSetter = (newValue) => {
        React.state[cachedIndex] = newValue;
      };
      React.index++;
      return [currentState, currentSetter];
    },
    render: Component => {
      const exampleProps = {
        unit: "likes"
      };
      const compo = Component(exampleProps);
      console.log("Render: ", compo.inner);
      React.index = 0; // reset index
      return compo;
    }
  };