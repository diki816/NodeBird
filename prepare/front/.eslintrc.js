module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnn",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "import",
        "react-hooks",
        "jsx-ally",
    ],
    "rules": {
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": "off",
        "no-undersocre-dangle": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-one-expression-per-line": "off",
        "object-curly-newline": "off",
        "linebreak-style": "off",
    }
};
