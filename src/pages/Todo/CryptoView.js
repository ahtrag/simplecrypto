import React, { Fragment } from "react";
import Paper from "../../components/Paper/PaperView";
import Grid from "../../components/Grid/GridView";
import { useGlobalStyles } from "../../utils/styles";
import Helmet from "react-helmet";
import TextInput from "../../components/TextInput/TextInputView";
import Button from "../../components/Button/ButtonView";
import { ContextProvider, Context } from "./CryptoState";

const TodoView = () => {
  const styles = useGlobalStyles();

  return (
    <Fragment>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <ContextProvider>
        <Context.Consumer>
          {({ state, handleLogOut, handleChangeFilter, apiCall }) => (
            <Fragment>
              <div
                className={`
                ${styles.gradAsh}
                ${styles.lgPadTop}
              `}
                style={{
                  minHeight: "100vh"
                }}
              >
                <Paper
                  className={`
                ${styles.container}
                ${styles.lgMarBottom}
              `}
                  style={{
                    height: "30%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <Grid type="container" className={`${styles.column}`}>
                    <Grid type="container" className={`${styles.row}`}>
                      <Grid type="item" sm={6} md={6}>
                        <h5 style={{ fontSize: "20px" }}>CRYPTO LISTS</h5>
                      </Grid>
                      <Grid
                        type="item"
                        sm={6}
                        md={6}
                        className={`
                          ${styles.txtRight}
                          ${styles.disFlex}
                          ${styles.jcEnd}
                        `}
                      >
                        <Button
                          className={styles.rounded}
                          onClick={handleLogOut}
                        >
                          Log Out
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid type="item" xs={12}>
                      <TextInput
                        id="filter"
                        name="filter"
                        label="Filter"
                        placeholder="filter"
                        value={state.filter}
                        onChange={handleChangeFilter}
                        fullWidth
                        className={`${styles.rounded}`}
                      />
                    </Grid>
                    <Grid type="item" xs={12} style={{ margin: "0 auto" }}>
                      <Button className={styles.rounded} onClick={apiCall}>
                        API Request
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </Fragment>
          )}
        </Context.Consumer>
      </ContextProvider>
    </Fragment>
  );
};

export default TodoView;
