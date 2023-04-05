import Head from 'next/head';
import styles from '../styles/Home.module.css'
import cx from 'classnames';

function dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>TARP-Dashboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={cx(styles["form-signin"], "text-center", "mt-5", "main")}>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert(e.target[0].value);
                    }}
                >
                    <h1 className="h3 mb-3 fw-normal text-light">Dashboard</h1>

                    <div className="form-floating mb-3">
                        <textarea type="text" className="form-control" id="Input" placeholder="Enter Text" />
                        <label htmlFor="Input">Enter Text</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default dashboard