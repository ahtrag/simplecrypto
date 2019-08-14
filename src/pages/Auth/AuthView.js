import React, { Fragment } from "react";
import Paper from "../../components/Paper";
import Grid from "../../components/Grid";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Switch from "../../components/Switch";
import { Helmet } from "react-helmet";
import { useGlobalStyles } from "../../utils/styles";
import { ContextProvider, Context } from "./AuthState";

const AuthView = props => {
  const styles = useGlobalStyles();

  return (
    <Fragment>
      <Helmet>
        <title>Authentication</title>
      </Helmet>

      <ContextProvider>
        <Context.Consumer>
          {({
            state,
            dispatch,
            handleChangeInput,
            handleSubmitLogin,
            handleSubmitResetPassword
          }) => (
            <div
              className={`${styles.disFlex} ${styles.jcCenter} ${
                styles.aiCenter
              } ${styles.gradAsh}`}
              style={{ minHeight: "100vh" }}
            >
              <Paper className={`${styles.container}`}>
                <Grid type="container" style={{ padding: 0 }}>
                  <Grid
                    type="item"
                    xs={12}
                    md={6}
                    className={`${styles.xlPadAll} ${styles.gradAsh} ${
                      styles.disFlex
                    } ${styles.aiCenter} ${styles.jcCenter}`}
                  >
                    {state.auth === "forgetPassword" ? (
                      <img
                        src="/assets/forget.svg"
                        alt="Register"
                        className={`${styles.imgResponsiveWidth}`}
                      />
                    ) : (
                      <img
                        src="/assets/login.svg"
                        alt="Login"
                        className={`${styles.imgResponsiveWidth}`}
                      />
                    )}
                  </Grid>
                  <Grid
                    type="item"
                    xs={12}
                    md={6}
                    className={`${styles.xlPadLeft} ${styles.xlPadBottom} ${
                      styles.mdPadTop
                    }`}
                  >
                    <div
                      className={`${styles.disFlex} ${styles.jcEnd} ${
                        styles.lgMarBottom
                      } ${styles.mdPadRight}`}
                    >
                      <Switch
                        switchValues={["login", "forgetPassword"]}
                        active={state.auth}
                        onSwitch={value =>
                          dispatch({
                            type: "HANDLE_CHANGE_AUTH",
                            value
                          })
                        }
                      />
                    </div>
                    {state.auth === "forgetPassword" ? (
                      <div className={styles.xlPadRight}>
                        <h1
                          className={`${styles.mdLetterSpacing} ${
                            styles.txtCenter
                          }`}
                        >
                          Forget Password
                        </h1>
                        <p
                          className={`
                  ${styles.smLetterSpacing} ${styles.txtCenter} 
                  ${styles.clNightRider} ${styles.lgLineHeight}
                `}
                        >
                          Input your email to reset password
                        </p>

                        <form onSubmit={handleSubmitResetPassword}>
                          <TextInput
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={state.email}
                            placeholder="Input Email"
                            onChange={handleChangeInput}
                            fullWidth
                          />
                          <Button className={styles.mdMarTop} type="submit">
                            Submit
                          </Button>
                        </form>
                      </div>
                    ) : (
                      <div className={styles.xlPadRight}>
                        <h1
                          className={`${styles.mdLetterSpacing} ${
                            styles.txtCenter
                          }`}
                        >
                          Login
                        </h1>
                        <p
                          className={`
                ${styles.smLetterSpacing} ${styles.txtCenter} 
                ${styles.clNightRider} ${styles.lgLineHeight}
              `}
                        >
                          Login to view cryptocurrencies list
                        </p>

                        <form onSubmit={handleSubmitLogin}>
                          <TextInput
                            type="email"
                            id="email"
                            name="email"
                            label="Email"
                            value={state.email}
                            placeholder="Input Email"
                            onChange={handleChangeInput}
                            fullWidth
                          />
                          <TextInput
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            value={state.password}
                            placeholder="Input Password"
                            onChange={handleChangeInput}
                            fullWidth
                          />
                          <Button className={styles.mdMarTop} type="submit">
                            Login
                          </Button>
                        </form>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </div>
          )}
        </Context.Consumer>
      </ContextProvider>
    </Fragment>
  );
};

export default AuthView;
