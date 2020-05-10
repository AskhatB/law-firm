import React from 'react';
import App from 'next/app';
import Router from 'next/router';

import '../styles/_common.scss';

export default class MyApp extends App {
  _isMounted = false;

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
    };
  }

  state = {
    loading: false,
  };

  componentDidMount() {
    this._isMounted = true;
    Router.events.on('routeChangeStart', () => {
      if (this._isMounted) {
        this.setState({ loading: true });
      }
    });
    Router.events.on('routeChangeComplete', () => {
      if (this._isMounted) {
        this.setState({ loading: false });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {this.state.loading && ''}
        <Component {...pageProps} />
      </>
    );
  }
}
